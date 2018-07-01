#!/usr/bin/env bash

mkdir -p src/styles
rsync -r node_modules/@uiux/material/schematics/styles src

# mkdir -p "src/assets/fonts/robotocondensed"
# mkdir -p "src/assets/fonts/robotomono"
# mkdir -p "src/assets/fonts/robotoslab"
# rsync "../fonts/apache/roboto/"*.* "src/assets/fonts/roboto"
# rsync "../fonts/apache/robotocondensed/"*.* "src/assets/fonts/robotocondensed"
# rsync "../fonts/apache/robotomono/"*.* "src/assets/fonts/robotomono"
# rsync "../fonts/apache/robotoslab/"*.* "src/assets/fonts/robotoslab"

