import { task } from 'gulp';
import { sequenceTask } from '../../package-tools/sequence-task';
import { execTask } from '../util';

// CDK
task(':build.cdk', execTask('ng', ['build', '@uiux/cdk', '--prod']));

task('build.cdk', sequenceTask(':clean.cdk', ':build.cdk'));

// MATERIAL
task(':build.mat', execTask('ng', ['build', '@uiux/material', '--prod'], { failOnStderr: true }));

/** bundle scss */
task(
  ':bundle.mat.scss',
  execTask('scss-bundle', ['-c', 'projects/uiux/material/scss-bundle.config.json'], {
    failOnStderr: true,
  })
);

/** pre-build themes */
task(
  ':build.prebuilt.themes',
  execTask('bash', ['./scripts/gulp-task-helpers/build-prebuilt-themes-mat.sh'], {
    failOnStderr: true,
  })
);

/** build app themes */
task(
  ':build.app.themes',
  execTask('bash', ['./scripts/gulp-task-helpers/build-app-themes.sh'], { failOnStderr: true })
);

/** build material project */
task(
  'build.mat',
  sequenceTask(
    ':clean.mat',
    ':build.mat',
    ':bundle.mat.scss',
    ':build.prebuilt.themes',
    ':build.app.themes'
  )
);

/** build material project */
task('build.projects', sequenceTask('build.cdk', 'build.mat'));
