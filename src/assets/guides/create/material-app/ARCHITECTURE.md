### Directories

```
   │
   ├── app
   │    ├── core
   │    │     └── footer 
   │    │     └── gaurds
   │    │     └── header
   │    │     └── services // singleton services
   │    │     └── user // module ( feature ) state
   │    ├── pages
   │    │     └── home.module
   │    │     └── about.module
   │    └── shared
   │    │     └── app state // service
   │    └── store // global state or app state
   ├── assets
   ├── configs // static application configs
   ├── environments
   └── styles
```

### Feature Based
There is no directory to put "features" as a feature may mean different things
depending on the context. A feature is considered to be a set of files that accomplish
one thing ( SOLID ) and can stand independent of any other feature. It encapsulates
all of it's dependencies such as REST clients, Store ( state ), API for other features
to consume, etc.

In the directory structure above, the 'user' feature is a core feature as it is
global to the entire app. It's store is maintained in the same directory, but may 
be referenced in the ./app/store service for ease of consumption by other modules 
( easier to import ). It may be consumed by the home module -- a lazy loaded module,
and the header -- a non-lazy loaded module, hence it belongs in the core module 
and not the shared module.

### Module ( Feature ) State

```
Feature
   │
   ├── feature.compoment.html
   ├── feature.compoment.scss
   ├── feature.compoment.spec.ts
   ├── feature.compoment.ts
   ├── feature.module.ts
   └── store
          ├── actions // class or funtions
          ├── reducers // class or functions
          └── feature.store.service.ts // singleton
```

State is generally maintained at the level of the module driving the state. 
Interdependence of states is handled at the app state level ( store ), or are 
comprised from from module states and referenced in the app state.

See [StoreSubject](https://uiuxengineering.com/fn/store/storeSubject) for store implementation.
