import { task } from 'gulp';
import { sequenceTask } from '../../package-tools/sequence-task';
import { execTask } from '../util';

// App
task(':prettier', execTask('prettier', ['--write', './src/**/*.ts']));
task(':lint', execTask('ng', ['lint']));

task('lint', sequenceTask(':prettier', ':lint'));
