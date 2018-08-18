#!/usr/bin/env bash

# remove dist directory
rm -rf dist

# remove build theme in node modules
rm node_modules/@uiux/material/theming.scss

source scripts/build-fn.sh
source scripts/build-material.sh

# bundle and copy scss files
source scripts/scss-bundle-mat.sh

ng build
