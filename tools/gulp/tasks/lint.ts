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
  'lint.cdk',
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
