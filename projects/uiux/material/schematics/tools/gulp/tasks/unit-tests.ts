import { task } from 'gulp';
import { sequenceTask } from '../../package-tools/sequence-task';
import { execTask } from '../util';

// CDK
task('test.cdk', execTask('ng', ['test', '@uiux/cdk', '--code-coverage']));

// CDK
task('test.mat', execTask('ng', ['test', '@uiux/material', '--code-coverage']));

task('test.projects', sequenceTask('test.cdk', 'test.mat'));
