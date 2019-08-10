import { task, src, dest } from 'gulp';
import { copyAppPkg } from '../util/copy-app-pkg';
import { logPipe } from '../util/gulpLogPipe';
import {
  incSemverAlpha,
  incSemverBeta, incSemverBuild, incSemveRC,
  incSemverMajor,
  incSemverMinor,
  incSemverPatch,
} from '../util/inc_semver';
import { argv  } from 'yargs';

const merge = require('merge-stream');
const gBump = require('gulp-bump');
const LOG_COLOR = 'green';

/**
 * cdk
 * @param version
 */
function updateCDK(version: string): any {

  return src('./libs/cdk/package.json')
    .pipe(logPipe('cdk', LOG_COLOR))
    .pipe(gBump({version: version}))
    .pipe(dest('./libs/cdk/'));
}

/**
 * d3
 * @param version
 */
function updated3(version: string): any {
  return src('./libs/d3/package.json')
    .pipe(logPipe('d3', LOG_COLOR))
    .pipe(gBump({version: version}))
    .pipe(dest('./libs/d3/'));
}

/**
 * dal
 * @param version
 */
function updateDAL(version: string): any {

  return src('./libs/dal/package.json')
    .pipe(logPipe('dal', LOG_COLOR))
    .pipe(gBump({version: version}))
    .pipe(dest('./libs/dal/'));
}

/**
 * dal
 * @param version
 */
function updateFirebase(version: string): any {

  return src('./libs/firebase/package.json')
    .pipe(logPipe('dal', LOG_COLOR))
    .pipe(gBump({version: version}))
    .pipe(dest('./libs/firebase/'));
}

/**
 * fn
 * @param version
 */
function updateFN(version: string): any {

  return src('./libs/fn/package.json')
    .pipe(logPipe('fn', LOG_COLOR))
    .pipe(gBump({version: version}))
    .pipe(dest('./libs/fn/'));
}

/**
 * icons
 * @param version
 */
function updateIcons(version: string): any {

  return src('libs/icons/package.json')
    .pipe(logPipe('icons', LOG_COLOR))
    .pipe(gBump({version: version}))
    .pipe(dest('./libs/icons/'));
}

/**
 * material
 * @param version
 */
function updateMaterial(version: string): any {

  return src('./libs/material/package.json')
    .pipe(logPipe('material', LOG_COLOR))
    .pipe(gBump({version: version}))
    .pipe(dest('./libs/material/'));
}

/**
 * rxjs
 * @param version
 */
function updaterxjs(version: string): any {

  return src('./libs/rxjs/package.json')
    .pipe(logPipe('rxjs', LOG_COLOR))
    .pipe(gBump({version: version}))
    .pipe(dest('./libs/rxjs/'));
}

/**
 * services
 * @param version
 */
function updatesvc(version: string): any {

  return src('./libs/services/package.json')
    .pipe(logPipe('services', LOG_COLOR))
    .pipe(gBump({version: version}))
    .pipe(dest('./libs/services/'));
}

/**
 * root
 * @param version
 */
function updateRoot(version: string): any {

  return src('./package.json')
    .pipe(logPipe('package.json', LOG_COLOR))
    .pipe(gBump({version: version}))
    .pipe(dest('./'));
}

function updatePackages(version: string): any {
  return merge(updateCDK(version),
               updated3(version),
               updateDAL(version),
               updateFirebase(version),
               updateFN(version),
               updateIcons(version),
               updateMaterial(version),
               updaterxjs(version),
               updatesvc(version),
               updateRoot(version),
               copyAppPkg());
}

// example: yarn run bump --ver=8.0.1
task('bump', () => {
  const newVersion: string = <string>argv['ver'];
  return updatePackages(newVersion);
});

function bump() {

}

task('bump.major', () => {
  const newVersion = incSemverMajor();
  return updatePackages(newVersion);
});

task('bump.minor', () => {
  const newVersion = incSemverMinor();
  return updatePackages(newVersion);
});

task('bump.patch', () => {
  const newVersion = incSemverPatch();
  return updatePackages(newVersion);
});

task('bump.patch', () => {
  const newVersion = incSemverPatch();
  return updatePackages(newVersion);
});

task('bump.alpa', () => {
  const newVersion = incSemverAlpha();
  return updatePackages(newVersion);
});

task('bump.beta', () => {
  const newVersion = incSemverBeta();
  return updatePackages(newVersion);
});

task('bump.build', () => {
  const newVersion = incSemverBuild();
  return updatePackages(newVersion);
});

task('bump.rc', () => {
  const newVersion = incSemveRC();
  return updatePackages(newVersion);
});

