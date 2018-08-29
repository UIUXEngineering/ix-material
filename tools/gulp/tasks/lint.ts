import { task } from 'gulp';
import { sequenceTask } from '../../package-tools/sequence-task';
import { execTask } from '../util';

// ng lint @uiux/cdk
task(':prettier.cdk', execTask('prettier', [
  '--write',
  './projects/uiux/cdk/**/*.ts',
]));

task(':lint.cdk', execTask('ng', [ 'lint', '@uiux/cdk' ]));

task('lint.cdk', sequenceTask(
  ':prettier.cdk',
  ':lint.cdk',
));


// ng lint @uiux/fn
task(':prettier.fn', execTask('prettier', [
  '--write',
  './projects/uiux/fn/**/*.ts',
]));

task(':lint.fn', execTask('ng', [ 'lint', '@uiux/fn' ]));

task('lint.fn', sequenceTask(
  ':prettier.fn',
  ':lint.fn',
));

// ng lint @uiux/dal
task(':prettier.dal', execTask('prettier', [
  '--write',
  './projects/uiux/dal/**/*.ts',
]));

task(':lint.dal', execTask('ng', [ 'lint', '@uiux/dal' ]));

task('lint.dal', sequenceTask(
  ':prettier.dal',
  ':lint.dal',
));

// ng lint @uiux/services
task(':prettier.services', execTask('prettier', [
  '--write',
  './projects/uiux/services/**/*.ts',
]));

task(':lint.services', execTask('ng', [ 'lint', '@uiux/services' ]));

task('lint.svc', sequenceTask(
  ':prettier.services',
  ':lint.services',
));

// ng lint @uiux/material
task(':prettier.mat', execTask('prettier', [
  '--write',
  './projects/uiux/material/**/*.ts'
]));

task(':lint.mat', execTask('ng', [ 'lint', '@uiux/material' ]));

task('lint.mat', sequenceTask(
  ':prettier.mat',
  ':lint.mat',
));

// projects
task('lint.projects', sequenceTask(
  'lint.fn',
  'lint.mat',
));

// App
task(':prettier', execTask('prettier', [
  '--write',
  './src/**/*.ts'
]));
task(':lint', execTask('ng', [ 'lint', 'uiux-material' ]));

task('lint', sequenceTask(
  ':prettier',
  ':lint',
));
