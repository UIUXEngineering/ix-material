#!/usr/bin/env bash

SOURCE="../material2"
DESTINATION="projects/uiux/material/src/lib"

# material2/src/fn/testing
rsync --exclude=index.ts --exclude=public-api.ts --exclude=BUILD.bazel --exclude=tsconfig-build.json "$SOURCE/src/fn/testing/"*.* "projects/uiux/fn/testing/src"
cp "$SOURCE/src/fn/testing/index.ts" "projects/uiux/fn/testing/index.ts"
cp "$SOURCE/src/fn/testing/public-api.ts" "projects/uiux/fn/testing/public_api.ts"

# material2/src/lib/core/theming/*.scss
rsync --exclude=_all-theme.scss "$SOURCE/src/lib/core/theming/"*.scss "$DESTINATION/core/theming"

# material2/src/lib/core/style/*.scss
rsync "$SOURCE/src/lib/core/style/"*.scss "$DESTINATION/core/style"

# material2/src/fn/a11y/_a11y.scss
rsync "$SOURCE/src/fn/a11y/_a11y.scss" "$DESTINATION/core/style"

# material2/src/lib/core/typography/*.*
rsync "$SOURCE/src/lib/core/typography/"*.* "$DESTINATION/core/typography"

# material2/src/lib/menu
rsync --exclude=index.ts --exclude=public-api.ts --exclude=BUILD.bazel --exclude=tsconfig-build.json "$SOURCE/src/lib/menu/"* "$DESTINATION/menu/src"
cp "$SOURCE/src/lib/menu/index.ts" "$DESTINATION/menu/index.ts"
cp "$SOURCE/src/lib/menu/public-api.ts" "$DESTINATION/menu/public_api.ts"


