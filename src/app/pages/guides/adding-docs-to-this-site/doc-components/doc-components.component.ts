import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  // tslint:disable-next-line
  selector: 'doc-components',
  templateUrl: './doc-components.component.html',
  styleUrls: ['./doc-components.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocComponentsComponent implements OnInit {
  // path to config in `src/configs/nav-items.ts`
  data: IDataItem = ROUTES.guides['adding-docs-to-this-site']['doc-components'];

  displayedColumns = ['component', 'type', 'description'];

  dataSourceComponents = [
    {
      component: `<api-container></api-container>`,
      type: 'wrapper',
      description: 'Container for API documentation.',
    },
    {
      component: `<example-container></example-container>`,
      type: 'wrapper',
      description: 'Container for examples documentation.',
    },
    {
      component: `<guide-container></guide-container>`,
      type: 'wrapper',
      description: 'Container for guide documentation.',
    },
    {
      component: `<overview-container></overview-container>`,
      type: 'wrapper',
      description: 'Container for overview documentation.',
    },
    {
      component: `<markdown-container></markdown-container>`,
      type: 'markdown',
      description: 'Loads a markdown file.',
    },
  ];

  displayedPropertyColumns = ['name', 'description'];
  dataSourceWrapperProperties = [
    {
      name: `
@Input('data')
data: IDataItem;`,
      description: 'Nav item in ROUTES object in the file ./src/configs/nav-items.ts',
    },
    {
      name: `
@Input('containerCssClass')
containerCssClass: String;`,
      description: 'Optional: Container CSS class of content. A default is provided',
    },
  ];

  displayedPropertyMarkdownColumns = ['name', 'description'];
  dataSourceMarkdownComponent = [
    {
      name: `
@Input('data')
data: IDataItem;`,
      description: 'Nav item in ROUTES object in the file ./src/configs/nav-items.ts',
    },
  ];

  dataSourceALink = [
    {
      name: `
@Input('url')
url: String;`,
      description: 'Link url.',
    },
  ];

  dataSourceHeaderComponents = [
    {
      component: `<h2-title></h2-title>`,
      description: 'Title Header - anchor is auto-generated.',
    },
    {
      component: `<h3-title></h3-title>`,
      description: 'Title Header - anchor is auto-generated.',
    },
    {
      component: `<h4-title></h4-title>`,
      description: 'Title Header - anchor is auto-generated.',
    },
    {
      component: `<h2-link></h2-link>`,
      description: 'Link Header - Manually enter anchor.',
    },
    {
      component: `<h3-link></h3-link>`,
      description: 'Link Header - Manually enter anchor.',
    },
    {
      component: `<h4-link></h4-link>`,
      description: 'Link Header - Manually enter anchor.',
    },
  ];

  sampleTitleHeader = `<h4-title [text]="'Sample Title'"></h4-title>`;
  dataSourceTitleHeader = [
    {
      name: `
@Input('text')
text: String;`,
      description: 'Text is placed in both inside header tag and anchor id.',
    },
  ];
  sampleLinkHeader = `<h4-link [anchor]="'sample-link-header'"><i>Sample Link Header</i></h4-link>`;
  dataSourceLinkHeader = [
    {
      name: `
@Input('anchor')
anchor: String;`,
      description: 'Text placed as header id for anchor tag.',
    },
  ];

  sampleALink = `<a-link [href]="https://material.io/">Angular Material</a-link>`;
  sampleCaution = `<caution>This is a caution block.</caution>`;
  syntaxHighLightExample = `<h3>example</h3>`;
  syntaxHighlightBlockExample = `
@Component({
   // tslint:disable-next-line
   selector: 'doc-components',
   templateUrl: './doc-components.component.html',
   styleUrls: [ './doc-components.component.scss' ],
   encapsulation: ViewEncapsulation.None,
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocComponentsComponent {}`;

  dataSourceSyntaxHighlight = [
    {
      component: `<code-bash-inline></code-bash-inline>`,
      type: 'inline',
      description: 'bash',
    },
    {
      component: `<code-bash-block></code-bash-block>`,
      type: 'block',
      description: 'bash',
    },
    {
      component: `<code-html-inline></code-html-inline>`,
      type: 'inline',
      description: 'HTML',
    },
    {
      component: `<code-html-block></code-html-block>`,
      type: 'block',
      description: 'HTML',
    },
    {
      component: `<code-import-inline></code-import-inline>`,
      type: 'inline',
      description: 'TypeScript import line',
    },
    {
      component: `<code-import-block></code-import-block>`,
      type: 'block',
      description: 'TypeScript import block',
    },
    {
      component: `<code-json-block></code-json-block>`,
      type: 'block',
      description: 'JSON block',
    },
    {
      component: `<code-json-inline></code-json-inline>`,
      type: 'inline',
      description: 'JSON inline',
    },
    {
      component: `<code-scss-inline></code-scss-inline>`,
      type: 'inline',
      description: 'SCSS',
    },
    {
      component: `<code-scss-block></code-scss-block>`,
      type: 'block',
      description: 'SCSS',
    },
    {
      component: `<code-ts-inline></code-ts-inline>`,
      type: 'inline',
      description: 'TypeScript',
    },
    {
      component: `<code-ts-block></code-ts-block>`,
      type: 'block',
      description: 'TypeScript',
    },
  ];

  dataSourceCode = [
    {
      name: `
@Input('code')
code: String;`,
      description: 'Code snippet to render syntax highlight',
    },
  ];

  dataSourceCodeImport = [
    {
      name: `
@Input('code')
code: String;`,
      description: 'Code snippet to render syntax highlight',
    },
    {
      name: `
@Input('_import')
_import: String;`,
      description:
        'Optional. Document the import properties of an import statement. ' +
        'Only works if both _import and _from are set and will' +
        'override code Input.',
    },
    {
      name: `
@Input('_from')
_from: String;`,
      description:
        'Optional.  Document the from file path of an import statement. ' +
        'Only works if both _import and _from are set and will' +
        'override code Input.',
    },
  ];

  sampleCodeImportInline = `<code-import-inline _import="hasValue" _from="@uiux/cdk/object"></code-import-inline>`;
  sampleCodeImportBlock = `<code-import-block _import="hasValue" _from="@uiux/cdk/object"></code-import-block>`;

  @HostBinding('class.doc-components') public bind = true;
  ngOnInit(): void {
    this.data.name = 'Components for Documentation';
  }
}

const ELEMENT_DATA: any[] = [{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' }];
