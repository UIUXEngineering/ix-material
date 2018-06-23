#!/usr/bin/env bash

rm -rf node_modules/@uiux
# rm -rf node_modules/@uiux/cdk
# echo removed node_modules/@uiux/cdk

# mkdir -p node_modules/@uiux/cdk

# remove dist
rm -rf dist/@uiux/cdk
echo removed dist/@uiux/cdk

ng build @uiux/cdk --prod

# copy bundle to node_modules
# cp -r dist/@uiux/cdk node_modules/@uiux
# echo Copied dist/@uiux/cdk to node_modules/@cdk

