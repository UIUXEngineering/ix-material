#!/usr/bin/env bash
rm -rf dist/libs
ng build fn
ng build cdk
ng build rxjs
ng build firebase
ng build services
ng build dal
ng build d3
ng build material

bash ./scripts/build-prebuilt-themes-mat.sh
bash ./scripts/build-app-themes.sh

scss-bundle -c libs/material/scss-bundle.config.json
