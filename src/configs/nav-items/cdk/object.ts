import { IDataItem } from '../../../models/routes';
import { CDK, GIT_REPO_PROJECTS_BASE, ICON } from '../../constants';

export const object: { [ key: string ]: IDataItem } = {
  // dataItem
  allPropsAreDefined: <IDataItem>{
    route: `/${CDK}/object/allPropsAreDefined`,
    name: 'allPropsAreDefined',
    desc: 'Determines if all properties on an object are defined.',
    base: '',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/all-props-are-defined.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, allPropsAreDefined, all props are defined`,
  },
  allPropsAreDefinedIn: <IDataItem>{
    route: `/${CDK}/object/allPropsAreDefinedIn`,
    name: 'allPropsAreTruthy',
    desc: 'Determines if all properties on an object are defined in a path.',
    base: '',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/all-props-are-defined-in.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, allPropsAreTruthy, all props are defined`,
  },
  allPropsAreTruthy: <IDataItem>{
    route: `/${CDK}/object/allPropsAreTruthy`,
    name: 'allPropsAreTruthy',
    desc: 'Determines if all properties on an object are truthy.',
    base: '',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/all-props-are-truthy-in.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, allPropsAreTruthy, all props are defined`,
  },
  allPropsAreTruthyIn: <IDataItem>{
    route: `/${CDK}/object/allPropsAreTruthyIn`,
    name: 'allPropsAreTruthyIn',
    desc: 'Determines if all properties on an object are truthy in a path.',
    base: '',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/all-props-are-truthy-in.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, allPropsAreTruthyIn, all props are defined`,
  },
  allPropsHaveValue: <IDataItem>{
    route: `/${CDK}/object/allPropsHaveValue`,
    name: 'allPropsHaveValue',
    desc: 'Determines if all properties on an object haveValue.',
    base: '',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/all-props-have-value-in.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, allPropsHaveValue, all props are defined`,
  },
  allPropsHaveValueIn: <IDataItem>{
    route: `/${CDK}/object/allPropsHaveValueIn`,
    name: 'allPropsHaveValueIn',
    desc: 'Determines if all properties on an object haveValue in a path.',
    base: '',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/all-props-have-value-in.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, allPropsHaveValueIn, all props are defined`,
  },
  clone: <IDataItem>{
    route: `/${CDK}/object/clone`,
    name: 'clone',
    desc: 'Clone an object.',
    base: '',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/clone.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, clone, all props are defined`,
  },
  createObjectWithPath: <IDataItem>{
    route: `/${CDK}/object/createObjectWithPath`,
    name: 'createObjectWithPath',
    desc: 'Create and object by submitting a path inside of an object.',
    base: '',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/create-object-with-path.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, createObjectWithPath, all props are defined`,
  },
  findProperties: <IDataItem>{
    route: `/${CDK}/object/findProperties`,
    name: 'findProperties',
    desc: 'Find property that matches search string.',
    base: '',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/find-properties.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, findProperties, all props are defined`,
  },
  findPropertyData: <IDataItem>{
    route: `/${CDK}/object/findPropertyData`,
    name: 'findPropertyData',
    desc: 'Find property that matches search string, return value of that property.',
    base: '',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/find-property-data.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, findPropertyData, all props are defined`,
  },
  findPropsWithValue: <IDataItem>{
    route: `/${CDK}/object/findPropsWithValue`,
    name: 'findPropsWithValue',
    desc: 'Find property that matches search string, return value of that property.',
    base: '',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/find-props-with-value.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, findPropsWithValue, all props are defined`,
  },
  getIn: <IDataItem>{
    route: `/${CDK}/object/getIn`,
    name: 'getIn',
    desc: 'Get a value deeply embedded in an object via dot path.',
    base: '',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/get-in.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, getIn, all props are defined`,
  },
  hasValueIn: <IDataItem>{
    route: `/${CDK}/object/hasValueIn`,
    name: 'hasValueIn',
    base: '',
    desc: 'Determines if a scalar value is not undefined, null, or empty in a nested object.',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/has-value-in.spec.ts`,
    seeAlso: [ 'hasValue' ],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, hasValueIn`,
  },
  hasValueNotEqualIn: <IDataItem>{
    route: `/${CDK}/object/hasValueNotEqualIn`,
    name: 'hasValueNotEqualIn',
    base: '',
    desc: 'Determines if two objects are not equal by hasValue in a path.',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/has-value-not-equal-in.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, hasValueNotEqualIn`,
  },
  invokeIfElseIn: <IDataItem>{
    route: `/${CDK}/object/invokeIfElseIn`,
    name: 'invokeIfElseIn',
    base: '',
    desc: 'Invoke a function nested in a path of an object.',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/invoke-if-else-in.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, invokeIfElseIn`,
  },
  invokeIfElseInConfig: <IDataItem>{
    route: `/${CDK}/object/invokeIfElseInConfig`,
    name: 'invokeIfElseInConfig',
    base: '',
    desc: 'Config param for invokeIfElseIn.',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/invoke-if-else-in-config.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, invokeIfElseInConfig`,
  },
  invokeIfIn: <IDataItem>{
    route: `/${CDK}/object/invokeIfIn`,
    name: 'invokeIfIn',
    base: '',
    desc: 'Invoke function if in path.',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/invoke-if-in.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, invokeIfIn`,
  },
  invokeIn: <IDataItem>{
    route: `/${CDK}/object/invokeIn`,
    name: 'invokeIn',
    base: '',
    desc: 'Invoke function in a path.',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/invoke-in.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, invokeIn`,
  },
  isDefinedIn: <IDataItem>{
    route: `/${CDK}/object/isDefinedIn`,
    name: 'isDefinedIn',
    base: '',
    desc: 'Determines if a nested property is not undefined or null.',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/is-defined-in.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, isDefinedIn`,
  },
  isIn: <IDataItem>{
    route: `/${CDK}/object/isIn`,
    name: 'isIn',
    base: '',
    desc: 'Determines if a property exists in a path.',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/is-in.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, isIn`,
  },
  isMatch: <IDataItem>{
    route: `/${CDK}/object/isMatch`,
    name: 'isMatch',
    base: '',
    desc: 'Recursively searches an object to find an object that matches a search object.',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/is-match.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, isMatch`,
  },
  isTruthyIn: <IDataItem>{
    route: `/${CDK}/object/isTruthyIn`,
    name: 'isTruthyIn',
    base: '',
    desc: 'Determine if a value isTruthy in a path of an object.',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/is-truthy-in.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, isTruthyIn`,
  },
  isArraySyntax: <IDataItem>{
    route: `/${CDK}/object/isArraySyntax`,
    name: 'isArraySyntax',
    base: '',
    desc: 'Immutable.js helper. Test if a nested object path is in array syntax.',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/key-converter.spec.ts#L21`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, isArraySyntax, keyConverter`,
  },
  keySplitterIntoImmutablePath: <IDataItem>{
    route: `/${CDK}/object/keySplitterIntoImmutablePath`,
    name: 'keySplitterIntoImmutablePath',
    base: '',
    desc: 'Immutable.js helper. Split nested object path string into notation consumable by Immutable.js.',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/key-converter.spec.ts#L47`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, keySplitterIntoImmutablePath, keyConverter`,
  },
  splitKeysIntoDotNotation: <IDataItem>{
    route: `/${CDK}/object/splitKeysIntoDotNotation`,
    name: 'splitKeysIntoDotNotation',
    base: '',
    desc: 'Immutable.js helper. For nested path strings, split keys into dot notation.',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/key-converter.spec.ts#L13`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, splitKeysIntoDotNotation, keyConverter`,
  },
  merge: <IDataItem>{
    route: `/${CDK}/object/merge`,
    name: 'merge',
    base: '',
    desc: 'Merge two objects ignoring arrays.',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/merge.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, merge`,
  },
  mergePropsIfNoValue: <IDataItem>{
    route: `/${CDK}/object/mergePropsIfNoValue`,
    name: 'mergePropsIfNoValue',
    base: '',
    desc: 'Merge properties of a source object to a target object only if the target properties have no value.',
    githubSpec: `${GIT_REPO_PROJECTS_BASE}/${CDK}/object/src/merge-props-if-no-value.spec.ts`,
    seeAlso: [],
    version: '6.0',
    icon: ICON.CDK,
    search: `${CDK}, object, mergePropsIfNoValue`,
  },
};
