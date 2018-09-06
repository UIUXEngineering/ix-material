## Creating an UIUX Library

Copy this file to your local drive and do a global search/replace with project and library names. For example, 
if my project is named "uiux", and my project will be in the npm registry as "@uiux":

replace `uiux/d3` with something like your componay's library, for example: `uiux/material`, or `angular/material`.

replace `d3` with a short version of `d3`. For example 'svc' is short for 'services'

Note: the '@' symbol is already coded, and you don't need to provide it.


### Create a new project

```bash

ng generate library @uiux/d3
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
      "@uiux/d3/*": [
        "dist/@uiux/d3/*"
      ]
    }
```

### For a library that ONLY has secondary endpoints

In the path `projects/uiux/d3`
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

"whitelistedNonPeerDependencies": ["immutable", "moment"]

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
    "moment": "2.22.1"
  },
  
  "peerDependencies": {
      "@angular/cdk": "^6.0.0",
      "@angular/common": "^6.0.0",
      "@angular/core": "^6.0.0",
      "@angular/material": "^6.0.1",
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

in the file `projects/uiux/d3/src/test.ts`

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
    "test.d3": "gulp test.d3",
    "lint.d3": "gulp lint.d3",
    "build.d3": "gulp build.d3",
}   
```

In the `./tools/gulp/tasks` directory, add the appropriate tasks 
for new library. Follow the patterns for  for fn or material. The fn 
uses secondary end-points and material is one major library.

#### build

```
// d3
// ng build @uiux/d3
task(':build.d3', execTask('ng', [ 'build', '@uiux/d3', '--prod' ]));

task('build.d3', sequenceTask(
  ':clean.d3',
  ':build.d3'));

```

#### clean

```
task(':clean.d3', cleanTask('dist/@uiux/d3'));
````

#### lint

```
// ng lint @uiux/d3
task(':prettier.d3', execTask('prettier', [
  '--write',
  './projects/uiux/d3/**/*.ts',
]));

task(':lint.d3', execTask('ng', [ 'lint', '@uiux/d3' ]));

task('lint.d3', sequenceTask(
  ':prettier.d3',
  ':lint.d3',
));


```

#### semver

```
function updated3(version: string): any {
  return src('./projects/uiux/d3/package.json')
    .pipe(bump({version: version}))
    .pipe(dest('./projects/uiux/d3/'));
}
```

#### unit-tests

```
// ng test @uiux/d3
task('test.d3', execTask('ng', [ 'test', '@uiux/d3', '--code-coverage' ]));
```

