import * as path from 'path';

import { Tree } from '@angular-devkit/schematics';
import { Schema } from '../schema';
import { stringUtils } from '@nrwl/workspace';

/**
 * Schematic request context
 */
export interface RequestContext {
  featureName: string;
  moduleDir: string;
  options: Schema;
  host?: Tree;
}

export function buildNameToNgrxFile(context: RequestContext, suffice: string) {

  const directory = context.options ? context.options.directory : '';

  return path.join(
    context.moduleDir,
    directory,
    `${stringUtils.dasherize(context.featureName)}.${suffice}`
  );
}
