# Semver

Use yarn commands to increments the version of project. This will update `package.json` files in the CDK, Material, Icons, Docs App, and assets folder.

The `package.json` at the root of this repo contains the version which incrementing semver is based.

If the root `package.json` version is 6.2.3:

`yarn run bump --ver=8.0.1` updates version to `8.0.1`  
`yarn bump.major` updates version to `7.0.0`  
`yarn bump.minor` updates version to `6.3.0`    
`yarn bump.patch` updates version to `6.2.4`    

Bumping alpha, beta, and rc only appends or increments the current version with something like `-rc.1`, `-alpha.1`, or `-beta.1`. If you want to increment the major, minor, or patch versions as well, run those commands first.

`yarn bump.alpha` updates version to `6.2.3-alpha.1`    
`yarn bump.beta` updates version to `6.2.3-beta.1`  
`yarn bump.rc` updates version to `6.2.3-rc.1`    


# Releasing Projects

_I have tried to automate this process with a script, but my two-factor authentication token for GitHub is not recognized when running `npm publish` inside of a script. Any help is appreciated._

1. Bump semver.
2. Build projects by runing `yarn build.projects`.
3. In the `dist/` path, cd into each project's directory containing it's `package.json` file, 
and run `npm publish`. Do not do this for the Icon's directory.

    ```bash
    cd ./dist/@uiux/cdk
    npm publish
    
    cd ./dist/@uiux/material
    npm publish
    
    cd ./projects/uiux/icons
    npm publish
    
    ```

# IxUtilities

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@ix-utilities/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
