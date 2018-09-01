import { task, src, dest } from 'gulp';
import { copyAppPkg } from '../util/copy-app-pkg';
import {
  incSemverAlpha,
  incSemverBeta, incSemverBuild, incSemveRC,
  incSemverMajor,
  incSemverMinor,
  incSemverPatch,
} from '../util/inc_semver';
const merge = require('merge-stream');
const bump = require('gulp-bump');
const git = require('gulp-git');
const chalk = require('chalk');
import { argv  } from 'yargs';

function updateCDK(version: string): any {
  console.log(chalk.green('cdk'));
  return src('./projects/uiux/cdk/package.json')
    .pipe(bump({version: version}))
    .pipe(dest('./projects/uiux/cdk/'));
}

function updateFN(version: string): any {
  console.log(chalk.green('fn'));
  return src('./projects/uiux/fn/package.json')
    .pipe(bump({version: version}))
    .pipe(dest('./projects/uiux/fn/'));
}


function updateDAL(version: string): any {
  console.log(chalk.green('dal'));
  return src('./projects/uiux/dal/package.json')
    .pipe(bump({version: version}))
    .pipe(dest('./projects/uiux/dal/'));
}

function updaterxjs(version: string): any {
  console.log(chalk.green('rxjs'));
  return src('./projects/uiux/rxjs/package.json')
    .pipe(bump({version: version}))
    .pipe(dest('./projects/uiux/rxjs/'));
}

function updatesvc(version: string): any {
  console.log(chalk.green('sevices'));
  return src('./projects/uiux/services/package.json')
    .pipe(bump({version: version}))
    .pipe(dest('./projects/uiux/services/'));
}

function updateMaterial(version: string): any {
  console.log(chalk.green('material'));
  return src('./projects/uiux/material/package.json')
    .pipe(bump({version: version}))
    .pipe(dest('./projects/uiux/material/'));
}

function updateIcons(version: string): any {
  console.log(chalk.green('icons'));
  return src('projects/uiux/icons/package.json')
    .pipe(bump({version: version}))
    .pipe(dest('./projects/uiux/icons/'));
}

function updateRoot(version: string): any {
  console.log(chalk.green('package.json'));
  return src('./package.json')
    .pipe(bump({version: version}))
    .pipe(dest('./'));
}

function updatePackages(version: string): any {
  return merge(updateCDK(version),
               updateFN(version),
               updateDAL(version),
               updaterxjs(version),
               updatesvc(version),
               updateMaterial(version),
               updateIcons(version),
               updateRoot(version),
               copyAppPkg());
}

// example: yarn run bump --ver=8.0.1
task('bump', () => {
  const newVersion = argv['ver'];
  return updatePackages(newVersion);
});

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

