import {
  apply,
  chain,
  url,
  mergeWith,
  template,
  move,
  noop,
  filter,
  Rule,
  Tree,
  SchematicContext,
} from '@angular-devkit/schematics';
import { formatFiles, names, toFileName } from '@nrwl/workspace';

import { Schema } from './schema';
import * as path from 'path';

import { addImportsToModule, addNgRxToPackageJson, addExportsToBarrel, RequestContext } from './rules';

/**
 * Rule to generate the Nx 'ngrx' Collection
 * Note: see https://nx.dev/angular/guides/misc-ngrx for guide to generated files
 */
export default function generateNgrxCollection(_options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const options: Schema = normalizeOptions(_options);

    if (!options.module) {
      throw new Error(`The required --module option must be passed`);
    } else if (!host.exists(options.module)) {
      throw new Error(`Path does not exist: ${options.module}`);
    }

    const requestContext: RequestContext = {
      featureName: options.name,
      moduleDir: path.dirname(options.module),
      options,
      host,
    };

    if (options.minimal) {
      options.onlyEmptyRoot = true;
    }

    if (options.skipImport) {
      options.onlyAddFiles = true;
    }

    const fileGeneration = !options.onlyEmptyRoot ? [generateNgrxFilesFromTemplates(options)] : [];

    const moduleModification = !options.onlyAddFiles
      ? [addImportsToModule(requestContext), addExportsToBarrel(requestContext.options)]
      : [];

    const packageJsonModification = !options.skipPackageJson ? [addNgRxToPackageJson()] : [];

    return chain([...fileGeneration, ...moduleModification, ...packageJsonModification, formatFiles(options)])(
      host,
      context
    );
  };
}

// ********************************************************
// Internal Function
// ********************************************************

/**
 * Generate 'feature' scaffolding: actions, reducer, effects, interfaces, selectors, facade
 */
function generateNgrxFilesFromTemplates(options: Schema) {
  const name = options.name;
  const moduleDir = path.dirname(options.module);
  // tslint:disable-next-line:no-shadowed-variable
  const excludeFacade = (path: string) => path.match(/^((?!facade).)*$/);

  const templateSource = apply(
    // url(options.syntax === 'creators' ? './creator-files' : './files'),
    url('./creator-files'),
    [
      // @ts-ignore
      !options.facade ? filter(excludeFacade) : noop(),
      template({ ...options, tmpl: '', ...names(name) }),
      move(moduleDir),
    ]
  );

  return mergeWith(templateSource);
}

/**
 * Extract the parent 'directory' for the specified
 */
function normalizeOptions(options: Schema): Schema {
  return {
    ...options,
    directory: toFileName(options.directory),
  };
}