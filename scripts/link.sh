#!/usr/bin/env bash

ROOT_DIR=$PWD;

#rsync -r "$ROOT_DIR/libs/material/schematics" "$ROOT_DIR/dist/@uiux/material"

cd "$ROOT_DIR/dist/libs/cdk"
echo $PWD
yarn link

cd "$ROOT_DIR/dist/libs/d3"
echo $PWD
yarn link

cd "$ROOT_DIR/dist/libs/dal"
echo $PWD
yarn link

cd "$ROOT_DIR/dist/libs/device"
echo $PWD
yarn link

cd "$ROOT_DIR/dist/libs/firebase"
echo $PWD
yarn link

cd "$ROOT_DIR/dist/libs/fn"
echo $PWD
yarn link

cd "$ROOT_DIR/libs/icons"
echo $PWD
yarn link

#cd "$ROOT_DIR/dist/libs/material"
#echo $PWD
#yarn link

cd "$ROOT_DIR/dist/libs/ngrx"
echo $PWD
yarn link

cd "$ROOT_DIR/dist/libs/rxjs"
echo $PWD
yarn link


cd "$ROOT_DIR/dist/libs/services"
echo $PWD
yarn link


cd $ROOT_DIR
echo $PWD

