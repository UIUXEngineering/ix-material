
import { task } from 'gulp';
import { sequenceTask } from '../../package-tools/sequence-task';
import { execTask } from '../util';

// CDK
task('test.cdk', execTask('ng', [ 'test', '@uiux/cdk', '--code-coverage' ]));

// FN
task('test.fn', execTask('ng', [ 'test', '@uiux/fn', '--code-coverage' ]));


// DAL
task('test.dal', execTask('ng', [ 'test', '@uiux/dal', '--code-coverage' ]));


// Material
task('test.mat', execTask('ng', [ 'test', '@uiux/material', '--code-coverage' ]));

task('test.projects', sequenceTask(
  'test.fn',
  'test.dal',
  'test.mat',
));
