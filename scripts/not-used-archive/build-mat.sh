#!/usr/bin/env bash

rm -rf node_modules/@uiux
# rm -rf node_modules/@uiux/material
# echo removed node_modules/@uiux/material

# mkdir -p node_modules/@uiux/material

# remove dist
rm -rf dist/@uiux/material
echo removed dist/@uiux/material

ng build @uiux/material --prod

# BUNDLE SCSSS
source scripts/build-mat-utils/build-scss-bundle-mat.sh

# PRE-BUILD THEMES
source scripts/build-mat-utils/build-prebuilt-themes-mat.sh

# CREATE APP THEMES
source scripts/build-mat-utils/build-app-themes.sh

# copy bundle to node_modules
# cp -r dist/@uiux/material node_modules/@uiux
# echo Copied dist/@uiux/material to node_modules/@uiux/material
