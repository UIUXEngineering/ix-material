import { dest, src, task } from 'gulp';
import { copyAppPkg } from '../util/copy-app-pkg';

task('copy.pkg', () => {
  return copyAppPkg();
});
