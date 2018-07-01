#!/usr/bin/env bash
echo "--> copying icon fonts"

mkdir -p src/assets/fonts
rsync -r node_modules/@uiux/material/schematics/fonts src/assets

# mkdir -p "src/assets/fonts/roboto"
# rsync "node_modules/@uiux/material/schematics/fonts/roboto/"*.* "src/assets/fonts/roboto"
