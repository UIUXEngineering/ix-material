#!/usr/bin/env bash

ROOT_DIR=$PWD;

cd "$ROOT_DIR/dist/@uiux/cdk"
echo $PWD
npm publish

cd "$ROOT_DIR/dist/@uiux/material"
echo $PWD
npm publish

cd "$ROOT_DIR/projects/uiux/icons"
echo $PWD
npm publish

cd $ROOT_DIR
echo $PWD

