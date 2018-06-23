# Material Workflow

## Build

Run `yarn build.mat`

This command will build the material project into `./dist/@uiux/material` and copy that directory to `./node_modules/@uiux/material` directory. Once in the `node_modules` directory, it's as if it was installe from npm and you may develop the documentation app for new features.

As part of the build process, `scss-bundler` is with the file `projects/uiux/material/scss-bundle.config.json` as the config.

## Test

Run `yarn test.mat`

## Lint

Run `yarn lint.mat`

This will run prettier before running lint.

## Publish

From the directory `projects/uiux/material`, run `npm publish`
