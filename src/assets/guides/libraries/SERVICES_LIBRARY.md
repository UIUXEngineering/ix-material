## Creating an UIUX Library

Copy this file to your local drive and do a global search/replace with project and library names. For example, 
if my project is named "uiux", and my project will be in the npm registry as "@uiux":

replace `uiux/services` with something like your componay's library, for example: `uiux/material`, or `angular/material`.

Note: the '@' symbol is already coded, and you don't need to provide it.


### Create a new project

```bash

ng generate library @uiux/services
```

### Open `tsconfig.json`

This change is to reference the library as if it's in `node_modules`.  

Change:

```json

"paths": {
     ...
    }
```
    
 To
 
 
```json

"paths": {
      "@uiux/services/*": [
        "dist/@uiux/services/*"
      ]
    }
```

### For a library that ONLY has secondary endpoints

In the path `projects/uiux/services`
Open files `ng-package.json` and `ng-package.prod.json`

Remove:

```json

  "lib": {
    "entryFile": "src/public_api.ts"
  },
```

### White list third party libraries
Add:

```json

"whitelistedNonPeerDependencies": ["immutable", "lodash-es", "moment"]

```

### Add third party dependencies
Add dependencies:

```bash

yarn add lodash-es@4.17.10
yarn add @types/lodash-es@4.17.0 --dev
yarn add moment@2.22.1
yarn add immutable@3.8.2
yarn add rxjs-compat

```

Optionally, you can add dependencies, or peerDependencies to `projects/uiux/fn/package.json`

```json

  "dependencies": {
    "immutable": "3.8.2",
    "lodash-es": "4.17.10",
    "moment": "2.22.1"
  },
  
  "peerDependencies": {
    "@angular/common": "^6.0.0-rc.0 || ^6.0.0",
    "@angular/core": "^6.0.0-rc.0 || ^6.0.0",
    "rxjs": "^6.1.0",
    "rxjs-compat": "^6.1.0"
  }
  
  ```
  
### prettier  
add file in root `.prettierrc` that contains:

```json

{
  "printWidth": 100,
  "parser": "typescript",
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "always"
}

```

### test

To test secondary endpoints that are not in the `src` directory.

in the file `projects/uiux/services/src/test.ts`

Change:

```typescript
const context = require.context('./', true, /\.spec\.ts$/);
```

to ( only changing '../'):

```typescript
const context = require.context('../', true, /\.spec\.ts$/);`
```

### Gulp

In the root `package.json` file, add the following to scripts:

```json
{
    "test.services": "gulp test.services",
    "lint.services": "gulp lint.services",
    "build.services": "gulp build.services",
}   
```

In the `./tools/gulp/tasks` directory, add the appropriate tasks 
for new library. Follow the patterns for  for fn or material. The fn 
uses secondary end-points and material is one major library.

