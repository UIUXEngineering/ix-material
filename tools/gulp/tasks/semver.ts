import { dest, src, task } from 'gulp';
import { argv } from 'yargs';
import { copyAppPkg } from '../util/copy-app-pkg';
import { logPipe } from '../util/gulpLogPipe';
import {
  incSemverAlpha,
  incSemverBeta,
  incSemverBuild,
  incSemveRC,
  incSemverMajor,
  incSemverMinor,
  incSemverPatch,
} from '../util/inc_semver';

const merge = require('merge-stream');
const bump = require('gulp-bump');
const LOG_COLOR = 'green';

interface FilePaths {
  src: string;
  dest: string;
}

const paths: FilePaths[] = [
  {
    src: './projects/uiux/cdk/package.json',
    dest: './projects/uiux/cdk/'
  },
  {
    src: './projects/uiux/cdk/browser/package.json',
    dest: './projects/uiux/cdk/browser/'
  },
  {
    src: './projects/uiux/cdk/constants/package.json',
    dest: './projects/uiux/cdk/constants/'
  },
  {
    src: './projects/uiux/cdk/dynamic-components/package.json',
    dest: './projects/uiux/cdk/dynamic-components/'
  },
  {
    src: './projects/uiux/cdk/forms/package.json',
    dest: './projects/uiux/cdk/forms/'
  },
  {
    src: './projects/uiux/cdk/testing/package.json',
    dest: './projects/uiux/cdk/testing/'
  },
  {
    src: './projects/uiux/cdk/validators/package.json',
    dest: './projects/uiux/cdk/validators/',
  },



  {
    src: './projects/uiux/d3/package.json',
    dest: './projects/uiux/d3/'
  },


  {
    src: './projects/uiux/dal/package.json',
    dest: './projects/uiux/dal/'
  },
  {
    src: './projects/uiux/dal/firebase/package.json',
    dest: './projects/uiux/dal/firebase/'
  },


  {
    src: './projects/uiux/fn/package.json',
    dest: './projects/uiux/fn/'
  },
  {
    src: './projects/uiux/fn/array/package.json',
    dest: './projects/uiux/fn/array/'
  },
  {
    src: './projects/uiux/fn/common/package.json',
    dest: './projects/uiux/fn/common/'
  },
  {
    src: './projects/uiux/fn/date/package.json',
    dest: './projects/uiux/fn/date/'
  },
  {
    src: './projects/uiux/fn/guid/package.json',
    dest: './projects/uiux/fn/guid/'
  },
  {
    src: './projects/uiux/fn/number/package.json',
    dest: './projects/uiux/fn/number/'
  },
  {
    src: './projects/uiux/fn/object/package.json',
    dest: './projects/uiux/fn/object/'
  },
  {
    src: './projects/uiux/fn/predicate/package.json',
    dest: './projects/uiux/fn/predicate/'
  },
  {
    src: './projects/uiux/fn/string/package.json',
    dest: './projects/uiux/fn/string/'
  },
  {
    src: './projects/uiux/icons/package.json',
    dest: './projects/uiux/icons/'
  },


  {
    src: './projects/uiux/material/package.json',
    dest: './projects/uiux/material/'
  },


  {
    src: './projects/uiux/rxjs/package.json',
    dest: './projects/uiux/rxjs/'
  },
  {
    src: './projects/uiux/rxjs/pipes/package.json',
    dest: './projects/uiux/rxjs/pipes/'
  },
  {
    src: './projects/uiux/rxjs/subjects/package.json',
    dest: './projects/uiux/rxjs/subjects/'
  },


  {
    src: './projects/uiux/services/package.json',
    dest: './projects/uiux/services/'
  },
  {
    src: './projects/uiux/services/dom/package.json',
    dest: './projects/uiux/services/dom/'
  },
  {
    src: './projects/uiux/services/lazy-load-vendor/package.json',
    dest: './projects/uiux/services/lazy-load-vendor/'
  },
  {
    src: './projects/uiux/services/local-storage/package.json',
    dest: './projects/uiux/services/local-storage/'
  },
  {
    src: './projects/uiux/services/theme/package.json',
    dest: './projects/uiux/services/theme/'
  },


  {
    src: './package.json',
    dest: './'
  },
];


function update( version: string, _path: FilePaths ): any {
  return src(_path.src)
    .pipe(logPipe(_path.src, LOG_COLOR))
    .pipe(bump({version: version}))
    .pipe(dest(_path.dest));
}

function updatePackages(version: string): any {
  return merge(...paths.map((path: FilePaths) => update(version, path) ),
               copyAppPkg());
}

// example: yarn run bump --ver=8.0.1
task('bump', () => {
  const newVersion = argv['ver'];
  return updatePackages(newVersion);
});

task('bump.major', () => {
  const newVersion = incSemverMajor();
  return updatePackages(newVersion);
});

task('bump.minor', () => {
  const newVersion = incSemverMinor();
  return updatePackages(newVersion);
});

task('bump.patch', () => {
  const newVersion = incSemverPatch();
  return updatePackages(newVersion);
});

task('bump.patch', () => {
  const newVersion = incSemverPatch();
  return updatePackages(newVersion);
});

task('bump.alpa', () => {
  const newVersion = incSemverAlpha();
  return updatePackages(newVersion);
});

task('bump.beta', () => {
  const newVersion = incSemverBeta();
  return updatePackages(newVersion);
});

task('bump.build', () => {
  const newVersion = incSemverBuild();
  return updatePackages(newVersion);
});

task('bump.rc', () => {
  const newVersion = incSemveRC();
  return updatePackages(newVersion);
});

