import { task } from 'gulp';
import { cleanTask } from '../util';

task(':clean.cdk', cleanTask('dist/@uiux/fn'));

task(':clean.mat', cleanTask('dist/@uiux/material'));
