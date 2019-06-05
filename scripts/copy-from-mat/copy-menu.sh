#!/usr/bin/env bash

SOURCE="../components"
DESTINATION="projects/uiux/material/src/lib"
MENU="projects/uiux/material/menu/src"

# components/src/fn/testing
rsync --exclude=index.ts --exclude=public-api.ts --exclude=BUILD.bazel --exclude=tsconfig-build.json "$SOURCE/src/cdk/testing/"*.* "projects/uiux/cdk/testing/src"
cp "$SOURCE/src/cdk/testing/index.ts" "projects/uiux/cdk/testing/index.ts"
cp "$SOURCE/src/cdk/testing/public-api.ts" "projects/uiux/cdk/testing/public_api.ts"

# components/src/lib/core/theming/*.scss
rsync --exclude=_all-theme.scss "$SOURCE/src/material/core/theming/"*.scss "$DESTINATION/core/theming"

# components/src/lib/core/style/*.scss
rsync "$SOURCE/src/material/core/style/"*.scss "$DESTINATION/core/style"

# components/src/fn/a11y/_a11y.scss
rsync "$SOURCE/src/cdk/a11y/_a11y.scss" "$DESTINATION/core/style"

# material2/src/lib/core/typography/*.*
rsync "$SOURCE/src/material/core/typography/"*.* "$DESTINATION/core/typography"

# material2/src/lib/menu
rsync --exclude=index.ts --exclude=public-api.ts --exclude=BUILD.bazel --exclude=tsconfig-build.json "$SOURCE/src/material/menu/"* "$MENU"
cp "$SOURCE/src/lib/menu/index.ts" "$DESTINATION/menu/index.ts"
cp "$SOURCE/src/lib/menu/public-api.ts" "$DESTINATION/menu/public_api.ts"


