#!/usr/bin/env bash

ROOT_DIR=$PWD;

rm -rf dist/libs

ng build d3
ng build dal
ng build firebase
ng build fn
ng build ngrx
ng build rxjs

#bash ./scripts/build-prebuilt-themes-mat.sh
#bash ./scripts/build-app-themes.sh
#scss-bundle -c libs/material/scss-bundle.config.json

#cd "$ROOT_DIR/libs/ngrx"
#npm run build
#cd ../../
