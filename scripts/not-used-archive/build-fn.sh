#!/usr/bin/env bash

rm -rf node_modules/@uiux
# rm -rf node_modules/@uiux/fn
# echo removed node_modules/@uiux/fn

# mkdir -p node_modules/@uiux/fn

# remove dist
rm -rf dist/@uiux/fn
echo removed dist/@uiux/fn

ng build @uiux/fn --prod

# copy bundle to node_modules
# cp -r dist/@uiux/fn node_modules/@uiux
# echo Copied dist/@uiux/fn to node_modules/@fn

