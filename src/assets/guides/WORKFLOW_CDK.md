# CDK Workflow

## Build

Run `yarn build.cdk`

This command will build the cdk project into `./dist/@uiux/cdk` and copy that directory to `./node_modules/@uiux/cdk` directory. Once in the `node_modules` directory, it's as if it was installe from npm and you may develop the documentation app for new features.

## Test

Run `yarn test.cdk`

## Lint

Run `yarn lint.cdk`

This will run prettier before running lint.

## Publish

From the directory `projects/uiux/cdk`, run `npm publish`
