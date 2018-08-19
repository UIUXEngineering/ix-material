## Creating an UIUX Library

Copy this file to your local drive and do a global search/replace with project and library names. For example, 
if my project is named "uiux", and my project will be in the npm registry as "@uiux":

replace `uiux/[library]` with something like your componay's library, for example: `uiux/material`, or `angular/material`.

replace `[library-abbr]` with a short version of `[library]`. For example 'svc' is short for 'services'

Note: the '@' symbol is already coded, and you don't need to provide it.


### Create a new project

```bash

ng generate library @uiux/[library]
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
      "@uiux/[library]/*": [
        "dist/@uiux/[library]/*"
      ]
    }
```

### For a library that ONLY has secondary endpoints

In the path `projects/uiux/[library]`
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

in the file `projects/uiux/[library]/src/test.ts`

Change:

```typescript
const context = require.context('./', true, /\.spec\.ts$/);
```

to ( only changing '../'):

```typescript
const context = require.context('../', true, /\.spec\.ts$/);
```

### Gulp

In the root `package.json` file, add the following to scripts:

```json
{
    "test.[library-abbr]": "gulp test.[library]",
    "lint.[library-abbr]": "gulp lint.[library]",
    "build.[library-abbr]": "gulp build.[library]",
}   
```

In the `./tools/gulp/tasks` directory, add the appropriate tasks 
for new library. Follow the patterns for  for fn or material. The fn 
uses secondary end-points and material is one major library.

#### build

```
// DAL
// ng build @uiux/[library-abbr]
task(':build.[library]', execTask('ng', [ 'build', '@uiux/[library]', '--prod' ]));

task('build.[library-abbr]', sequenceTask(
  ':clean.[library]',
  ':build.[library]'));

```

#### clean

```
task(':clean.[library]', cleanTask('dist/@uiux/[library]'));
````

#### lint

```
// ng lint @uiux/[library]
task(':prettier.[library]', execTask('prettier', [
  '--write',
  './projects/uiux/[library]/**/*.ts',
]));

task(':lint.[library]', execTask('ng', [ 'lint', '@uiux/[library]' ]));

task('lint.[library-abbr]', sequenceTask(
  ':prettier.[library]',
  ':lint.[library]',
));


```

#### semver

```
function update[library-abbr](version: string): any {
  return src('./projects/uiux/[library]/package.json')
    .pipe(bump({version: version}))
    .pipe(dest('./projects/uiux/[library]/'));
}
```

#### unit-tests

```
// ng test @uiux/[library]
task('test.[library-abbr]', execTask('ng', [ 'test', '@uiux/[library]', '--code-coverage' ]));
```

