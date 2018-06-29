# uiux Material



## Projects ( Libraries )  
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1. This tool should be utilized as much as possible to generate new code, lint, test. Using the Angular CLI ensures Google support and standards for project architecture, lint, and testing, and provides the best structure for successful platform upgrades.

The current projects in this repo include:

  - @uiux/cdk
  - @uiux/material
  - uiux Documentation Site

## Getting Started

Node 8.10.0 is required. Recomment using [Node Version Manager](https://github.com/creationix/nvm#installation) to quickly change node among different development environments.

1. Run `nvm use` to use the version of node required for this repo. You may have to install the correct version of node ( See [Node Version Manager](https://github.com/creationix/nvm#installation) docs ).

2. Install development tools globally  
    `npm install -g @angular/cli yarn @uiux/cli`  

3. Clone this repo.

4. Run `yarn install`.

## Workflows 

See the differne workflows to understand how to add code in each proejct.
  
  - [Adding Docs to this site](./src/assets/guides/DOCUMENT_COMPOMENTS.md)
  - [Dev Environment](./src/assets/guides/DEV_ENVIRONMENT.md)
  - [CDK](./src/assets/guides/WORKFLOW_CDK.md)
  - [Material](./src/assets/guides/WORKFLOW_MATERIAL.md)
  - [Documentation App](./src/assets/guides/WORKFLOW_DOCS.md)

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

4. CD into `projects/uiux/icons` directory, and run `npm publish`.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
