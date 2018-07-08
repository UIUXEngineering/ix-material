import {task} from 'gulp';
import { cleanTask } from '../util';



task(':clean.cdk', cleanTask('dist/@uiux/cdk'));

task(':clean.mat', cleanTask('dist/@uiux/material'));

task(':clean.dal', cleanTask('dist/@uiux/dal'));
