import { findBuildConfig } from './find-build-config';

export interface BuildConfig {
  /** Required Angular version for the project. */
  angularVersion: string;

  /** Required Angular version for the project. */
  angularCommonVersion: string;

  /** Required Angular version for the project. */
  cdkVersion: string;

  /** Required Flex Layout version of the project. */
  flexLayoutVersion: string;

  /** Required Material version for the project. */
  materialVersion: string;

  /** Required Lodah version for the project. */
  lodashVersion: string;

  /** Required immutable version for the project. */
  immutableVersion: string;

  /** Required moment version. */
  momentVersion: string;

  /** Required Angular Forms version of the project. */
  angularFormsVersion: string;

  /** Required RxJS of the project. */
  rxjsVersion: string;

  /** Required rxjs-compat of the project. */
  rxjsCompatVersion: string;

  /** Required rxjs-compat of the project. */
  buildVersion: string;
}

// Search for a build config by walking up the current working directory of the Node process.
const buildConfigPath = findBuildConfig();

if (!buildConfigPath) {
  const errorMsg =
    'Build tools were not able to find a build config. ' +
    'Please create a "build-config.js" file in your project.';
  throw new Error(errorMsg);
}

// Load the config file using a basic CommonJS import.
export const buildConfig = require(buildConfigPath) as BuildConfig;
