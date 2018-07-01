#!/usr/bin/env bash
echo "--> copying svg icons and ix-cli.json"
mkdir -p design/icons
rsync -r node_modules/@uiux/material/schematics/design/icons design
cp node_modules/@uiux/material/schematics/ix-cli/ix-cli.json ix-cli.json

