import { MenuApiComponent } from '../app/pages/components/Layout/menu/menu-api/menu-api.component';
import { MenuExampleComponent } from '../app/pages/components/Layout/menu/menu-example/menu-example.component';
import { MenuOverviewComponent } from '../app/pages/components/Layout/menu/menu-overview/menu-overview.component';
import { TabItem } from '../app/shared/util-components/tab-group/tab-item';
import { IDataItem, IRoute } from '../models/routes';
import { FN, COMPONENTS, GIT_REPO_PROJECTS_BASE, GUIDES, ICON, ICONS, POC, THEMES } from './constants';
import { object } from './nav-items/fn/object';

export const ROUTES: IRoute = {
  // project
  fn: {
    // section
    guides: {
      // dataItem
      ['fn-overview']: <IDataItem>{
        route: `/${FN}/guides/fn-overview`,
        name: 'FN Overview',
        desc: 'Overview of fn.',
        base: '',
        githubSpec: null,
        seeAlso: [],
        version: '6.0',
        icon: ICON.FN,
        search: `${FN}, overview`,
      },

      // dataItem
      ['adding-to-fn']: <IDataItem>{
        route: `/${FN}/guides/adding-to-fn`,
        name: 'Adding To FN',
        desc: 'Adding To FN.',
        base: '',
        githubSpec: null,
        seeAlso: [],
        version: '6.0',
        icon: ICON.FN,
        search: `${FN}, adding`,
      },
    },
    // section
    object: object,

    store: {
      storeSubject: <IDataItem>{
        route: `/${FN}/store/storeSubject`,
        name: 'storeSubject',
        desc: 'RxJS Store Subject that supports optional flux pattern.',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${FN}/store/src/store-subject.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.FN,
        search: `${FN}, value, storeSubject, store, subject`,
      },
    },
    // section
    value: {
      hasValue: <IDataItem>{
        route: `/${FN}/value/hasValue`,
        name: 'hasValue',
        desc: 'Determines if a scalar value is not undefined, null, or empty.',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${FN}/value/src/has-value.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.FN,
        search: `${FN}, value, hasValue`,
      },
      hasValueEqual: <IDataItem>{
        route: `/${FN}/value/hasValueEqual`,
        name: 'hasValueEqual',
        desc: 'Determines two values are equal based on hasValue check.',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${FN}/value/src/has-value-equal.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.FN,
        search: `${FN}, value, hasValueEqual`,
      },
      hasValueNotEqual: <IDataItem>{
        route: `/${FN}/value/hasValueNotEqual`,
        name: 'hasValueNotEqual',
        base: '',
        desc: 'Determines if two objects are not equal by hasValue check.',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${FN}/value/src/has-value-not-equal.spec.ts`,
        seeAlso: ['hasValue'],
        version: '6.0',
        icon: ICON.FN,
        search: `${FN}, object, hasValueNotEqual`,
      },
      isDefined: <IDataItem>{
        route: `/${FN}/value/isDefined`,
        name: 'isDefined',
        base: '',
        desc: 'Determines if an value is not undefined or null.',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${FN}/value/src/is-defined.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.FN,
        search: `${FN}, value, isDefined`,
      },
      isScalar: <IDataItem>{
        route: `/${FN}/value/isScalar`,
        name: 'isScalar',
        base: '',
        desc: 'Determines if a value is a scalar value.',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${FN}/object/src/is-scalar.spec.ts`,
        seeAlso: [],
        version: '6.0',
        icon: ICON.FN,
        search: `${FN}, value, isScalar`,
      },
    },
  },

  // project
  material: {
    // section
    guides: {
      // dataItem
      ['mat-overview']: <IDataItem>{
        route: `/${COMPONENTS}/guides/mat-overview`,
        name: 'Components Overview',
        desc: 'Overview of components.',
        base: '',
        githubSpec: null,
        seeAlso: [],
        version: '6.0',
        icon: ICON.MATERIAL,
        search: `${COMPONENTS}, material, overview`,
      },
      ['adding-components']: <IDataItem>{
        route: `/${COMPONENTS}/guides/adding-components`,
        name: 'Adding Components',
        desc: 'Adding Components.',
        base: '',
        githubSpec: null,
        seeAlso: [],
        version: '6.0',
        icon: ICON.MATERIAL,
        search: `${COMPONENTS}, material, adding`,
      },
    },
    // section
    Layout: {
      // dataItem
      menu: <IDataItem>{
        route: `/${COMPONENTS}/Layout/menu/overview`,
        name: 'menu',
        desc: 'Shows html content in a pop-over',
        base: '',
        githubSpec: `${GIT_REPO_PROJECTS_BASE}/${COMPONENTS}/src/lib/menu/src/menu.spec.ts`,
        seeAlso: ['hasValue'],
        version: '6.0',
        icon: ICON.MATERIAL,
        search: `${COMPONENTS}, menu`,
        tabItem: new TabItem(MenuOverviewComponent, MenuApiComponent, MenuExampleComponent),
      },
    },
  },

  // project
  guides: {
    // section
    'getting-started': {
      // dataItem
      install: <IDataItem>{
        // Do No Use: this is auto configured.
        base: '',

        // Required: shows description in search results
        desc: 'Installation and dependencies.',

        // Required if using markdown: file to load in documentation
        file: '',

        // Do Not Use: guides don't have unit tests.
        githubSpec: '',

        // Required: icon name used in search results
        icon: ICON.GUIDE,

        // Required: Name of Guide will become right menu header link
        name: 'Install Guide',

        // Required: Route to doc
        route: `/${GUIDES}/getting-started/install`,

        // Required: search filters
        search: `${GUIDES}, install, getting-started`,

        // Optional
        seeAlso: [],

        // Not Required, only used for components and fn
        version: '6.0',
      },
      firebase: <IDataItem>{
        base: '',
        desc: 'Host Docs to Firebase.',
        file: 'assets/guides/getting-started/FIREBASE.md',
        githubSpec: '',
        icon: ICON.GUIDE,
        name: 'Host Docs to Firebase',
        route: `/${GUIDES}/getting-started/firebase`,
        search: `${GUIDES}, install, getting-started, firebase`,
        seeAlso: [],
        version: '6.0',
      },
      references: <IDataItem>{
        route: `/${GUIDES}/getting-started/references`,
        name: 'References',
        base: '',
        desc: 'References for learning, research, and development.',
        seeAlso: [],
        version: '6.0',
        icon: ICON.GUIDE,
        search: `${GUIDES}, references, learning, research, dev, develop, development`,
      },
    },
    create: {
      'material-app': {
        base: '',
        desc: 'Create and Angular Material App.',
        file: `assets/${GUIDES}/create/material-app/MATERIAL_APP.md`,
        githubSpec: '',
        icon: ICON.GUIDE,
        name: 'Angular Material App ',
        route: `/${GUIDES}/create/material-app`,
        search: `${GUIDES}, create, material-app`,
        seeAlso: [],
        version: '6.0',
      },
      architecture: {
        base: '',
        desc: 'Angular Architecture.',
        file: `assets/${GUIDES}/create/material-app/ARCHITECTURE.md`,
        githubSpec: '',
        icon: ICON.GUIDE,
        name: 'Architecture',
        route: `/${GUIDES}/create/architecture`,
        search: `${GUIDES}, create, architecture`,
        seeAlso: [],
        version: '6.0',
      },
    },
    upgrade: {
      angular: <IDataItem>{
        // Do No Use: this is auto configured.
        base: '',

        // Required: shows description in search results
        desc: 'Upgrade Angular.',

        // Required if using markdown: file to load in documentation
        file: 'assets/guides/upgrade/angular.md',

        // Do Not Use: guides don't have unit tests.
        githubSpec: '',

        // Required: icon name used in search results
        icon: ICON.GUIDE,

        // Required: Name of Guide will become right menu header link
        name: 'Upgrade Angular',

        // Required: Route to doc
        route: `/${GUIDES}/upgrade/angular`,

        // Required: search filters
        search: `${GUIDES}, upgrade, angular`,

        // Optional
        seeAlso: [],

        // Not Required, only used for components and fn
        version: '6.0',
      },
    },
    'adding-docs-to-this-site': {
      markdown: <IDataItem>{
        // No Not Edit
        base: '',

        // Required: Follows same path as this Routes object
        route: `/${GUIDES}/adding-docs-to-this-site/markdown`,

        // Required: Name of Guide will become right menu header link
        name: 'Adding Markdown Files',

        // Required if using markdown: file to load in documentation
        file: 'assets/guides/adding-docs-to-this-site/markdown.md',

        // Required: shows description in search results
        desc: 'Documentation using markdown files.',

        // Do Not Use: guides don't have unit tests.
        githubSpec: '',

        // Required: icon name used in search results
        icon: ICON.GUIDE,

        // Required: search filters
        search: `${GUIDES}, install, adding-docs-to-this-site, adding, docs, site, markdown`,

        // Optional
        seeAlso: [],

        // Not Required, only used for components and fn
        version: '6.0',
      },
      html: <IDataItem>{
        // No Not Edit
        base: '',

        // Required: Follows same path as this Routes object
        route: `/${GUIDES}/adding-docs-to-this-site/html`,

        // Required: Name of Guide will become right menu header link
        // and <h2> title of document
        name: 'Creating Guides Using HTML',

        // Required if using markdown: file to load in documentation
        file: '',

        // Required: shows description in search results
        desc: 'Documentation Using HTML.',

        // Do Not Use: guides don't have unit tests.
        githubSpec: '',

        // Required: icon name used in search results
        icon: ICON.GUIDE,

        // Required: search filters
        search: `${GUIDES}, install, adding-docs-to-this-site, adding, docs, site, html`,

        // Optional
        seeAlso: [],

        // Not Required, only used for components and fn
        version: '6.0',
      },
      'doc-components': <IDataItem>{
        // No Not Edit
        base: '',

        // Required: Follows same path as this Routes object
        route: `/${GUIDES}/adding-docs-to-this-site/doc-components`,

        // Required: Name of Guide will become right menu header link
        // and <h2> title of document
        name: 'Doc Components',

        // Required if using markdown: file to load in documentation
        file: '',

        // Required: shows description in search results
        desc: 'Components for Documentation.',

        // Do Not Use: guides don't have unit tests.
        githubSpec: '',

        // Required: icon name used in search results
        icon: ICON.GUIDE,

        // Required: search filters
        search: `${GUIDES}, install, adding-docs-to-this-site, adding, docs, Components for Documentation`,

        // Optional
        seeAlso: [],

        // Not Required, only used for components and fn
        version: '6.0',
      },
    },
    patterns: {
      forms: <IDataItem>{
        route: `/${GUIDES}/patterns/forms`,
        name: 'Forms Patterns',
        base: '',
        desc: 'Software patterns for forms.',
        seeAlso: [],
        version: '6.0',
        icon: ICON.GUIDE,
        search: `${GUIDES}, software, design, patterns, forms`,
      },
    },
  },

  // project
  icons: {
    // section
    custom: {
      // dataItem
      search: <IDataItem>{
        route: `/${ICONS}/custom/search`,
        name: 'search',
        desc: 'Search custom icons.',
        base: '',
        githubSpec: ``,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CUSTOM,
        search: `${ICONS}, icon, icons, install`,
      },
      // dataItem
      ['install-svg-icons']: <IDataItem>{
        route: `/${ICONS}/custom/install-svg-icons`,
        name: 'Install SVG Icons',
        desc: 'Install custom icons.',
        base: '',
        githubSpec: ``,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CUSTOM,
        search: `${ICONS}, icon, icons, install`,
      },
      // dataItem
      ['add-to-platform']: <IDataItem>{
        route: `/${ICONS}/custom/add-to-platform`,
        name: 'Add Icon To Platform',
        desc: 'How to add an icon to the platform.',
        base: '',
        githubSpec: ``,
        seeAlso: [],
        version: '6.0',
        icon: ICON.CUSTOM,
        search: `${ICONS}, icon, icons, add, platform`,
      },
    },
  },

  // project
  poc: {
    // section
    guides: {
      // dataItem
      ['poc-overview']: <IDataItem>{
        route: `/${POC}/guides/poc-overview`,
        name: 'Proof of Concepts',
        desc: 'Adding a Proof of Concept.',
        base: '',
        githubSpec: ``,
        seeAlso: [],
        version: '6.0',
        icon: ICON.POC,
        search: `${POC}, guide, overview`,
      },
    },
    // section
    demos: {
      // dataItem
      ['sample-poc']: <IDataItem>{
        route: `/${POC}/demos/sample-poc`,
        name: 'Sample PoC',
        desc: 'Sample PoC.',
        base: '',
        githubSpec: ``,
        seeAlso: [],
        version: '6.0',
        icon: ICON.POC,
        search: `${POC}, demos, demo, sample`,
      },
    },
    d3: {
      svgShadowDomViewEncapsulation: <IDataItem>{
        route: `/${POC}/d3/svgShadowDomViewEncapsulation`,
        name: 'D3 SVG In ShadowDom',
        base: '',
        desc: 'Test SVG ShadowDom ViewEncapsulation to speed up render time and reduce memory.',
        seeAlso: [],
        version: '6.0',
        icon: ICON.POC,
        search: `${POC}, object, ShadowDom, svg ViewEncapsulation`,
      },
      horizBar: <IDataItem>{
        route: `/${POC}/d3/horizBar`,
        name: 'Horizontal Bar Chart',
        base: '',
        desc: 'Test SVG ShadowDom ViewEncapsulation to speed up render time and reduce memory.',
        seeAlso: [],
        version: '6.0',
        icon: ICON.POC,
        search: `${POC}, object, ShadowDom, svg ViewEncapsulation`,
      },
      canvasShadowDomViewEncapsulation: <IDataItem>{
        route: `/${POC}/d3/canvasShadowDomViewEncapsulation`,
        name: 'D3 Canvas In ShadowDom',
        base: '',
        desc: 'Test Canvas ShadowDom ViewEncapsulation to speed up render time and reduce memory.',
        seeAlso: [],
        version: '6.0',
        icon: ICON.POC,
        search: `${POC}, object, ShadowDom, canvas ViewEncapsulation`,
      },
    },
  },

  // project
  themes: {
    // section
    demos: {
      // dataItem
      overview: <IDataItem>{
        route: `/${THEMES}/demos/overview`,
        name: 'Overview',
        desc: 'Theme Overview Demo.',
        base: '',
        githubSpec: ``,
        seeAlso: [],
        version: '6.0',
        icon: ICON.THEMES,
        search: `${THEMES}, demos, theme, overview`,
      },
    },
    // section
    references: {
      // dataItem
      resources: <IDataItem>{
        route: `/${THEMES}/references/resources`,
        name: 'Resources',
        desc: 'Theme references.',
        base: '',
        githubSpec: ``,
        seeAlso: [],
        version: '6.0',
        icon: ICON.THEMES,
        search: `${THEMES}, demos, theme, references`,
      },
    },
  },
};
