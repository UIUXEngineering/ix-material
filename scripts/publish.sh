#!/usr/bin/env bash

ROOT_DIR=$PWD;

#rsync -r "$ROOT_DIR/libs/material/schematics" "$ROOT_DIR/dist/@uiux/material"

cd "$ROOT_DIR/dist/libs/cdk"
echo $PWD
npm publish --access public

cd "$ROOT_DIR/dist/libs/d3"
echo $PWD
npm publish --access public

cd "$ROOT_DIR/dist/libs/dal"
echo $PWD
npm publish --access public

cd "$ROOT_DIR/dist/libs/firebase"
echo $PWD
npm publish --access public

cd "$ROOT_DIR/dist/libs/fn"
echo $PWD
npm publish --access public

cd "$ROOT_DIR/libs/icons"
echo $PWD
npm publish --access public

cd "$ROOT_DIR/dist/libs/material"
echo $PWD
npm publish --access public

cd "$ROOT_DIR/dist/libs/rxjs"
echo $PWD
npm publish --access public


cd "$ROOT_DIR/dist/libs/services"
echo $PWD
npm publish --access public


cd $ROOT_DIR
echo $PWD

