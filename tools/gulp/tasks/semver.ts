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
import { argv  } from 'yargs';

function updateCDK(version: string): any {
  return src('./projects/uiux/cdk/package.json')
    .pipe(bump({version: version}))
    .pipe(dest('./projects/uiux/cdk/'));
}

function updateMaterial(version: string): any {
  return src('./projects/uiux/material/package.json')
    .pipe(bump({version: version}))
    .pipe(dest('./projects/uiux/material/'));
}

function updateIcons(version: string): any {
  return src('projects/uiux/icons/package.json')
    .pipe(bump({version: version}))
    .pipe(dest('./projects/uiux/icons/'));
}

function updateRoot(version: string): any {
  return src('./package.json')
    .pipe(bump({version: version}))
    .pipe(dest('./'));
}

// function add(): any {
//   return src('.')
//     .pipe(git.add());
// }
//
// function commit(version: string): any {
//   return src('.')
//     .pipe(git.commit(`Bumps to version ${version}`));
// }


function updatePackages(version: string): any {
  return merge(updateCDK(version),
               updateMaterial(version),
               updateIcons(version),
               updateRoot(version),
               copyAppPkg(),
               // add(),
               // commit(version)
  );
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

