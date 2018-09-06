import { task } from 'gulp';
import { sequenceTask } from '../../package-tools/sequence-task';
import { execTask } from '../util';

// CDK
task(':build.cdk', execTask('ng', [ 'build', '@uiux/cdk', '--prod' ]));

task('build.cdk', sequenceTask(
  ':clean.cdk',
  ':build.cdk'));

// d3
// ng build @uiux/d3
task(':build.d3', execTask('ng', [ 'build', '@uiux/d3', '--prod' ]));

task('build.d3', sequenceTask(
  ':clean.d3',
  ':build.d3'));

// FN
task(':build.fn', execTask('ng', [ 'build', '@uiux/fn', '--prod' ]));

task('build.fn', sequenceTask(
  ':clean.fn',
  ':build.fn'));


// DAL
task(':build.dal', execTask('ng', [ 'build', '@uiux/dal', '--prod' ]));

task('build.dal', sequenceTask(
  ':clean.dal',
  ':build.dal'));

// rxjs
// ng build @uiux/rxjs
task(':build.rxjs', execTask('ng', [ 'build', '@uiux/rxjs', '--prod' ]));

task('build.rxjs', sequenceTask(
  ':clean.rxjs',
  ':build.rxjs'));

// services
// ng build @uiux/svc
task(':build.services', execTask('ng', [ 'build', '@uiux/services', '--prod' ]));

task('build.svc', sequenceTask(
  ':clean.services',
  ':build.services'));

// MATERIAL
task(':build.mat', execTask('ng', [ 'build', '@uiux/material', '--prod' ], { failOnStderr: true }));

/** bundle scss */
task(':bundle.mat.scss', execTask('scss-bundle', [
  '-c',
  'projects/uiux/material/scss-bundle.config.json',
], { failOnStderr: true }));

/** pre-build themes */
task(':build.prebuilt.themes', execTask('bash', [ './scripts/gulp-task-helpers/build-prebuilt-themes-mat.sh' ], { failOnStderr: true }));

/** build app themes */
task(':build.app.themes', execTask('bash', [ './scripts/gulp-task-helpers/build-app-themes.sh' ], { failOnStderr: true }));

/** build material project */
task('build.mat', sequenceTask(
  ':clean.mat',
  ':build.mat',
  ':bundle.mat.scss',
  ':build.prebuilt.themes',
  ':build.app.themes',
));

/** build material project */
task('build.projects', sequenceTask(
  'build.cdk',
  'build.d3',
  'build.fn',
  'build.mat',
  'build.dal',
  'build.rxjs',
  'build.svc'
));

