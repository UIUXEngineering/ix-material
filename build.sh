#!/usr/bin/env bash

ROOT_DIR=$PWD;

rm -rf dist/libs

nx build fn
nx build rxjs
nx build d3
nx build dal
nx build firebase

#bash ./scripts/build-prebuilt-themes-mat.sh
#bash ./scripts/build-app-themes.sh
#scss-bundle -c libs/material/scss-bundle.config.json

#cd "$ROOT_DIR/libs/ngrx"
#npm run build
#cd ../../
