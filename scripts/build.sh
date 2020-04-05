#!/usr/bin/env bash

ROOT_DIR=$PWD;

rm -rf dist/libs
ng build fn --prod
ng build cdk --prod
ng build rxjs --prod
ng build device --prod
ng build firebase --prod
ng build services --prod
ng build dal --prod
ng build d3 --prod
#ng build material
ng build ngrx --prod

#bash ./scripts/build-prebuilt-themes-mat.sh
#bash ./scripts/build-app-themes.sh
#scss-bundle -c libs/material/scss-bundle.config.json

cd "$ROOT_DIR/libs/ngrx"
npm run build
cd ../../
