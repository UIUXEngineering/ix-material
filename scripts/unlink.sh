#!/usr/bin/env bash

ROOT_DIR=$PWD;

#rsync -r "$ROOT_DIR/libs/material/schematics" "$ROOT_DIR/dist/@uiux/material"

yarn unlink @uiux/cdk
yarn unlink @uiux/d3
yarn unlink @uiux/dal
yarn unlink @uiux/device
yarn unlink @uiux/firebase
yarn unlink @uiux/fn
yarn unlink @uiux/icons
yarn unlink @uiux/ngrx
yarn unlink @uiux/rxjs
yarn unlink @uiux/services

cd $ROOT_DIR
echo $PWD
