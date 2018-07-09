import { dest, src } from 'gulp';

export function copyAppPkg(): any {
  return src('./package.json').pipe(dest('./src/assets/'));
}
