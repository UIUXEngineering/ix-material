#!/usr/bin/env bash

ROOT_DIR=$PWD;

rsync -r "$ROOT_DIR/projects/uiux/material/schematics" "$ROOT_DIR/dist/@uiux/material"

cd "$ROOT_DIR/dist/@uiux/cdk"
echo $PWD
npm publish

cd "$ROOT_DIR/dist/@uiux/dal"
echo $PWD
npm publish

cd "$ROOT_DIR/dist/@uiux/fn"
echo $PWD
npm publish

cd "$ROOT_DIR/projects/uiux/icons"
echo $PWD
npm publish

cd "$ROOT_DIR/dist/@uiux/material"
echo $PWD
npm publish

cd "$ROOT_DIR/dist/@uiux/rxjs"
echo $PWD
npm publish


cd "$ROOT_DIR/dist/@uiux/services"
echo $PWD
npm publish


cd $ROOT_DIR
echo $PWD

