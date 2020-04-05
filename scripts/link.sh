#!/usr/bin/env bash

ROOT_DIR=$PWD;

#rsync -r "$ROOT_DIR/libs/material/schematics" "$ROOT_DIR/dist/@uiux/material"

cd "$ROOT_DIR/dist/libs/cdk"
echo $PWD
yarn unlink @uiux/cdk
yarn link

cd "$ROOT_DIR/dist/libs/d3"
echo $PWD
yarn unlink @uiux/d3
yarn link

cd "$ROOT_DIR/dist/libs/dal"
echo $PWD
yarn unlink @uiux/dal
yarn link

cd "$ROOT_DIR/dist/libs/device"
echo $PWD
yarn unlink @uiux/device
yarn link

cd "$ROOT_DIR/dist/libs/firebase"
echo $PWD
yarn unlink @uiux/firebase
yarn link

cd "$ROOT_DIR/dist/libs/fn"
echo $PWD
yarn unlink @uiux/fn
yarn link

cd "$ROOT_DIR/libs/icons"
echo $PWD
yarn unlink @uiux/icons
yarn link

#cd "$ROOT_DIR/dist/libs/material"
#echo $PWD
#yarn link

cd "$ROOT_DIR/dist/libs/ngrx"
echo $PWD
yarn unlink @uiux/ngrx
yarn link

cd "$ROOT_DIR/dist/libs/rxjs"
echo $PWD
yarn unlink @uiux/rxjs
yarn link


cd "$ROOT_DIR/dist/libs/services"
echo $PWD
yarn unlink @uiux/services
yarn link


cd $ROOT_DIR
echo $PWD

