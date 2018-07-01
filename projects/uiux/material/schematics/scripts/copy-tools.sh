#!/usr/bin/env bash

echo "--> copying gulp files"
mkdir -p tools/gulp
mkdir -p tools/package-tools
rsync -r node_modules/@uiux/material/schematics/tools/gulp tools
rsync -r node_modules/@uiux/material/schematics/tools/package-tools tools

cp node_modules/@uiux/material/schematics/gulp/gulpfile.js gulpfile.js

