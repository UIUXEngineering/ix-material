#!/usr/bin/env bash

npx compodoc -p libs/cdk/tsconfig.lib.json -d apps/uiux/src/assets/docs/cdk --theme material
npx compodoc -p libs/d3/tsconfig.lib.json -d apps/uiux/src/assets/docs/d3 --theme material
npx compodoc -p libs/dal/tsconfig.lib.json -d apps/uiux/src/assets/docs/dal --theme material
npx compodoc -p libs/device/tsconfig.lib.json -d apps/uiux/src/assets/docs/device --theme material
npx compodoc -p libs/firebase/tsconfig.lib.json -d apps/uiux/src/assets/docs/firebase --theme material
npx compodoc -p libs/fn/tsconfig.lib.json -d apps/uiux/src/assets/docs/fn --theme material
npx compodoc -p libs/material/tsconfig.lib.json -d apps/uiux/src/assets/docs/material --theme material
npx compodoc -p libs/rxjs/tsconfig.lib.json -d apps/uiux/src/assets/docs/rxjs --theme material
npx compodoc -p libs/services/tsconfig.lib.json -d apps/uiux/src/assets/docs/services --theme material
