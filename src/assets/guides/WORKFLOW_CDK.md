# FN Workflow

## Build

Run `yarn build.fn`

This command will build the fn project into `./dist/@uiux/fn` and copy that directory to `./node_modules/@uiux/fn` directory. Once in the `node_modules` directory, it's as if it was installe from npm and you may develop the documentation app for new features.

## Test

Run `yarn test.fn`

## Lint

Run `yarn lint.fn`

This will run prettier before running lint.

## Publish

From the directory `projects/uiux/fn`, run `npm publish`
