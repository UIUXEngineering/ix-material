#!/bin/bash

# to maintain same structure as angular material
DEST_PATH=dist/@uiux/material/prebuilt-themes
mkdir -p dist/@uiux/material/prebuilt-themes

INPUT_PATH=projects/uiux/material/src/lib/core/theming/prebuilt/


echo Building pre-built themes.

# Get the files
FILES=$(find projects/uiux/material/src/lib/core/theming/prebuilt -name "*.scss")

for FILE in $FILES
do
  FILENAME=${FILE#$INPUT_PATH}
  BASENAME=${FILENAME%.scss}
  $(npm bin)/node-sass $FILE > $DEST_PATH/$BASENAME.css --output-style compressed
done

echo Finished Pre-building CSS.
