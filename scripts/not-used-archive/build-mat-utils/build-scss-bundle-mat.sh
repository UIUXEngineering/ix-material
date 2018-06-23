#!/bin/bash

# bundles scss styles
node_modules/.bin/scss-bundle -c projects/uiux/material/scss-bundle.config.json

# copy bundle to node_modules
# use source to run script in same process --
# the build process has to be linear since each
# step requires the previous step
# source scripts/build-mat-utils/copy-bundled-styles.sh
