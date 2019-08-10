 #!/bin/bash

DEST_PATH=apps/uiux/src/assets
INPUT_PATH=$DEST_PATH/custom-themes/


echo Building custom theme scss files.

# Get the files
FILES=$(find apps/uiux/src/assets/custom-themes -name "*.scss")

for FILE in $FILES
do
  FILENAME=${FILE#$INPUT_PATH}
  BASENAME=${FILENAME%.scss}
  $(npm bin)/sass $FILE > $DEST_PATH/$BASENAME.css --output-style compressed
done

echo Finished building CSS.
