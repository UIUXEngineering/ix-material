#!/usr/bin/env bash

# create directive if not exists
mkdir -p node_modules/@uiux/material

# copy bundle to node_modules
cp dist/@uiux/material/theming.scss node_modules/@uiux/material/theming.scss

echo Copied dist/@uiux/material/theming.scss to node_modules/@uiux/material/theming.scss

# copy pre-built themes
cp -r dist/@uiux/material/core/theming/prebuilt node_modules/@uiux/material/core/theming/prebuilt

echo Copied dist/@uiux/material/theming.scss to node_modules/@uiux/material/theming.scss
