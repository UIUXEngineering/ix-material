#!/usr/bin/env bash

echo "--> updating @angular/cli @uiux/cli"

source node_modules/@uiux/material/schematics/scripts/copy-fonts.sh
source node_modules/@uiux/material/schematics/scripts/copy-prettier.sh
source node_modules/@uiux/material/schematics/scripts/copy-styles.sh
source node_modules/@uiux/material/schematics/scripts/copy-svg-cli.sh
source node_modules/@uiux/material/schematics/scripts/copy-tools.sh
source node_modules/@uiux/material/schematics/scripts/lite-server-configs.sh

npm install -g @uiux/cli prettier

# common packages
yarn add rxjs-compat moment hammerjs @angular/cdk @angular/material @uiux/cdk @angular/flex-layout lodash-es immutable

# polyfills
yarn add classlist.js web-animations-js intl

# build tools
yarn add gulp gulp-bump gulp-clean gulp-shell lite-server semver yargs merge-stream run-sequence @types/yargs @types/semver @types/lodash-es --dev

ix svg

