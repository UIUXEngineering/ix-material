# Developer guide: getting your environment set up

1. Make sure you have `node` installed with a version at _least_ 8.10.0.
2. Run `yarn install`.


### Running tests

**FN**: `yarn build.fn`.  
**Material**: `yarn build.mat`.   

To build all projects: `yarn build.projects`.


### Bundle SCSS

in the Material project scss is bundled using the `2.3.0-beta` version of the `scss-bundle` library. This version has the feature of **NOT** including third party libraries imported from `node_modules` such as `@import '~@angular/material/themine`;
