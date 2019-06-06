import { task, series } from 'gulp';
import { execTask } from '../util';

// CDK
task(':build.cdk', execTask('ng', [ 'build', '@uiux/cdk', '--ts-config', 'projects/uiux/cdk/tsconfig.lib.json', '--prod' ]));

task('build.cdk', series(
  ':clean.cdk',
  ':build.cdk'));

// d3
// ng build @uiux/d3
task(':build.d3', execTask('ng', [ 'build', '@uiux/d3', '--ts-config', 'projects/uiux/d3/tsconfig.lib.json', '--prod' ]));

task('build.d3', series(
  ':clean.d3',
  ':build.d3'));

// FN
task(':build.fn', execTask('ng', [ 'build', '@uiux/fn', '--ts-config', 'projects/uiux/fn/tsconfig.lib.json', '--prod' ]));

task('build.fn', series(
  ':clean.fn',
  ':build.fn'));


// DAL
task(':build.dal', execTask('ng', [ 'build', '@uiux/dal', '--ts-config', 'projects/uiux/dal/tsconfig.lib.json', '--prod' ]));

task('build.dal', series(
  ':clean.dal',
  ':build.dal'));

// rxjs
// ng build @uiux/rxjs
task(':build.rxjs', execTask('ng', [ 'build', '@uiux/rxjs', '--ts-config', 'projects/uiux/rxjs/tsconfig.lib.json', '--prod' ]));

task('build.rxjs', series(
  ':clean.rxjs',
  ':build.rxjs'));

// services
// ng build @uiux/svc
task(':build.services', execTask('ng', [ 'build', '@uiux/services', '--ts-config', 'projects/uiux/services/tsconfig.lib.json', '--prod' ]));

task('build.svc', series(
  ':clean.services',
  ':build.services'));

// MATERIAL
task(':build.mat', execTask('ng', [ 'build', '@uiux/material',
  '--ts-config', 'projects/uiux/material/tsconfig.lib.json', '--prod' ]));

/** bundle scss */
task(':bundle.mat.scss', execTask('scss-bundle', [
  '-c',
  'projects/uiux/material/scss-bundle.config.json',
]));

/** pre-build themes */
task(':build.prebuilt.themes', execTask('bash', [ './scripts/gulp-task-helpers/build-prebuilt-themes-mat.sh' ], { failOnStderr: true }));

/** build app themes */
task(':build.app.themes', execTask('bash', [ './scripts/gulp-task-helpers/build-app-themes.sh' ], { failOnStderr: true }));

/** build material project */
task('build.mat', series(
  ':clean.mat',
  ':build.mat',
  ':bundle.mat.scss',
  ':build.prebuilt.themes',
  ':build.app.themes',
));

/** build material project */
task('build.projects', series(
  'build.fn',
  'build.rxjs',
  'build.cdk',
  'build.d3',
  'build.dal',
  'build.svc',
  'build.mat',
));

