import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

export interface AppSpecs {
  appName: string;
  prefix: string;
}

@Component({
             selector: 'create-angular-material',
             templateUrl: './create-material-app.component.html',
             styleUrls: [ './create-material-app.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class CreateMaterialAppComponent implements OnInit {
  data: IDataItem = ROUTES.guides.create['material-app'];

  installYarn = `yarn add @uiux/material`;
  installScript = `bash node_modules/@uiux/material/schematics/install.sh`;


  cliNpm = `npm install -g @angular/cli`;
  cliYarn = `yarn global add @angular/cli`;
  cliYarnUpgrade = `yarn global upgrade @angular/cli`;

  appForm: FormGroup;
  // appName = 'my-app';

  createProject: string;
  cdIntoProject: string;
  projectName: string;
  installSchematic: string;
  addDependencies = 'yarn add @angular/material @angular/cdk @uiux/cdk @uiux/material @angular/flex-layout';
  stylesConfig = `
 "styles": [
    {
      "input": "src/styles.scss"
    }
  ],
  `;

  materialDesignIcons = 'http://google.github.io/material-design-icons/#icon-font-for-the-web';
  cloneMaterialDesignIcons = 'git clone https://github.com/google/material-design-icons.git';
  cloneMaterialDesignIconsRepo = 'https://github.com/google/material-design-icons';
  cloneNgAssets = `git clone https://github.com/UIUXEngineering/ng-assets.git`;
  copyScripts = `rsync ../ng-assets/scripts/*.* scripts`;
  materialIssue = `https://github.com/angular/material2/issues/11836`;
  collectionJson = './node_modules/@angular/material/schematics/collection.json';

  bashScriptCopyIconFont = 'bash scripts/copy-icon-font.sh';
  cloneGoogleFontsRepo = 'git clone https://github.com/google/fonts.git';
  bashScriptCopyGoogleFont = 'bash scripts/copy-google-font.sh';
  codeScssImportFonts = `@import './styles/fonts/font.styles';`;

  replaceJson = `
// This is the root config file where the schematics are defined.
  {
    "$schema": "./node_modules/@angular-devkit/schematics/collection-schema.json",
    "schematics": {
      // Adds Angular Material to an application without changing any templates
      "ng-add": {
        "description": "Adds Angular Material to the application without affecting any templates",
        "factory": "./install",
        "schema": "./install/schema.json",
        "aliases": ["material-shell"]
      },
      // Create a dashboard component
      "dashboard": {
        "description": "Create a card-based dashboard component",
        "factory": "./dashboard/index",
        "schema": "./dashboard/schema.json",
        "aliases": ["material-dashboard"]
      },
      // Creates a table component
      "table": {
        "description": "Create a component that displays data with a data-table",
        "factory": "./table/index",
        "schema": "./table/schema.json",
        "aliases": ["material-table"]
      },
      // Creates toolbar and navigation components
      "nav": {
        "description": "Create a component with a responsive sidenav for navigation",
        "factory": "./nav/index",
        "schema": "./nav/schema.json",
        "aliases": [ "material-nav" ]
      },
      // Creates a address form component
      "addressForm": {
        "description": "Create a component with a address form",
        "factory": "./address-form/index",
        "schema": "./address-form/schema.json",
        "aliases": ["address-form"]
      }
    }
  }
  `;

  pkgScripts =
`
"lint": "gulp lint",
"build.prod": "ng build --aot --prod --configuration production",
"copy.icons": "gulp copy.icons",
"serve": "ng serve",
"serve.cc": "lite-server --config=coverage-server-cdk",
"serve.prod": "ng serve --prod --configuration production",
"serve.dist": "lite-server --config=server-config-dist",
"bump": "gulp bump",
"bump.major": "gulp bump.major",
"bump.minor": "gulp bump.minor",
"bump.patch": "gulp bump.patch",
"bump.alpa": "gulp bump.alpa",
"bump.beta": "gulp bump.beta",
"bump.build": "gulp bump.build",
"bump.rc": "gulp bump.rc"
`;

  fontsImport = `@import './styles/fonts';`;
  angularTheming = `@import '~@angular/material/theming';`;
  uiuxTheming = `@import '~@uiux/material/theming';`;
  matCore = `@include mat-core();`;
  ixCore = `@include ix-core();`;

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef ) {
  }

  updateCodeSnippets(val: string, prefix: string) {
    this.createProject = `ng new ${val} --prefix=${prefix} --style=scss`;
    this.cdIntoProject = `cd ${val}`;
    this.projectName = ` ${val} `;
    this.installSchematic = `ng generate @angular/material:material-shell ` +
      `--collection=material-schematics --theme=custom --project=${val}`;
    this.cd.markForCheck();
  }

  ngOnInit(): void {
    this.appForm = this.buildFormGroup();
    this.projectName = this.appForm.value.appName;
    this.updateCodeSnippets(this.projectName, this.appForm.value.prefix);

    this.appForm.valueChanges.subscribe((val: AppSpecs) => {
      this.projectName = val.appName;
      this.updateCodeSnippets(this.projectName, val.prefix);
    });
  }

  private buildFormGroup(): FormGroup {
    const group: any = {
      appName: new FormControl('my-app-name'),
      prefix: new FormControl('app'),
    };

    return this.fb.group(group);
  }
}
