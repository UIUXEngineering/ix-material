import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { CodeBashBlockComponent } from './doc-components/code/code-bash-block.component';
import { CodeImportBlockComponent } from './doc-components/code/code-import-block.component';
import { CodeJsonBlockComponent } from './doc-components/code/code-json-block.component';
import { CodeJsonInlineComponent } from './doc-components/code/code-json-inline.component';
import { CodeScssInlineComponent } from './doc-components/code/code-scss-inline.component';
import { CodeTsInlineComponent } from './doc-components/code/code-ts-inline.component';
import { AngularCdkComponent } from './doc-components/common-links/angular-cdk.component';
import { AngularCliComponent } from './doc-components/common-links/angular-cli.component';
import { AngularIoComponent } from './doc-components/common-links/angular-io.component';
import { AngularMaterialInstallComponent } from './doc-components/common-links/angular-material-install.component';
import { AngularMaterialComponent } from './doc-components/common-links/angular-material.component';
import { AngularPackageFormatComponent } from './doc-components/common-links/angular-package-format.component';
import { DocCdkGithubComponent } from './doc-components/common-links/doc-cdk-github.component';
import { DocMaterialGithubComponent } from './doc-components/common-links/doc-material-github.component';
import { MaterialDesignComponent } from './doc-components/common-links/material-design.component';
import { NgPackagrComponent } from './doc-components/common-links/ng-packagr.component';
import { SeeDocComponentsComponent } from './doc-components/doc-links/see-doc-components.component';
import { SeeInstallIconsComponent } from './doc-components/doc-links/see-install-icons.component';
import { GuideTitleComponent } from './doc-components/guide-container/guide-title/guide-title.component';
import { GuideViewerComponent } from './doc-components/guide-container/guide-viewer/guide-viewer.component';
import { H2LinkComponent } from './doc-components/h2/h2-link.component';
import { H2TitleComponent } from './doc-components/h2/h2-title.component';
import { H3TitleComponent } from './doc-components/h3/h3-title.component';
import { H4TitleComponent } from './doc-components/h4/h4-title.component';
import { MarkdownContainerComponent } from './doc-components/markdown-container/markdown-container.component';
import { CopierService } from './services/copier/copier.service';
import { HighlightService } from './services/highlight-js/highlight.service';
import { ComponentHeaderModule } from './util-components/component-page-header/component-page-header';
import { DocViewerModule } from './util-components/doc-viewer/doc-viewer-module';
import { SeeAlsoComponent } from './util-components/see-also/see-also.component';
import { TableOfContentsModule } from './util-components/table-of-contents/table-of-contents.module';
import { ContentLoadedModule } from '@uiux/cdk/dom';
import { SpPipesModule } from '@uiux/cdk/pipes';
import { SpSearchAutocompleteModule, SpShowModule } from '@uiux/material';
import { MarkdownModule } from 'ngx-markdown';
import { ApiContainerComponent } from './doc-components/api-container/api-container.component';
import { ApiTitleComponent } from './doc-components/api-container/api-viewer/api-title/api-title.component';
import { ApiViewerComponent } from './doc-components/api-container/api-viewer/api-viewer.component';
import { CodeHtmlBlockComponent } from './doc-components/code/code-html-block.component';
import { ExampleContainerComponent } from './doc-components/example-container/example-container.component';
import { ExampleViewerComponent } from './doc-components/example-container/example-viewer/example-viewer.component';
import { GuideContainerComponent } from './doc-components/guide-container/guide-container.component';
import { H3LinkComponent } from './doc-components/h3/h3-link.component';
import { H4LinkComponent } from './doc-components/h4/h4-link.component';
import { OverviewContainerComponent } from './doc-components/overview-container/overview-container.component';
import { OverviewViewerComponent } from './doc-components/overview-container/overview-viewer/overview-viewer.component';
import { CodeBashInlineComponent } from './doc-components/code/code-bash-inline.component';
import { CodeHtmlInlineComponent } from './doc-components/code/code-html-inline.component';
import { CodeImportInlineComponent } from './doc-components/code/code-import-inline.component';
import { CodeScssBlockComponent } from './doc-components/code/code-scss-block.component';
import { CodeTsBlockComponent } from './doc-components/code/code-ts-block.component';
import { CodeViewerComponent } from './util-components/code-viewer.component';
import { GithubSpecComponent } from './util-components/github-spec/github-spec.component';
import { LinkHasValueComponent } from './doc-components/doc-links/link-has-value.component';
import { ALinkComponent } from './doc-components/a-link/a-link.component';
import { MarkdownViewerComponent } from './util-components/markdown-viewer/markdown-viewer.component';
import { SeeAlsoItemsComponent } from './util-components/see-also-items/see-also-items.component';
import { ApiHostDirective } from './util-components/tab-group/directives/api-host.directive';
import { ExampleHostDirective } from './util-components/tab-group/directives/example-host.directive';
import { OverviewHostDirective } from './util-components/tab-group/directives/overview-host.directive';
import { TabApiComponent } from './util-components/tab-group/tab-api/tab-api.component';
import { TabExampleComponent } from './util-components/tab-group/tab-example/tab-example.component';
import { TabGroupComponent } from './util-components/tab-group/tab-group.component';
import { TabOverviewComponent } from './util-components/tab-group/tab-overview/tab-overview.component';
import { TitleExampleComponent } from './util-components/title-example/title-example.component';
import { VersionComponent } from './util-components/version/version.component';
import { CautionComponent } from './doc-components/caution/caution.component';
import { ProjectArchitectureComponent } from './doc-components/common-links/project-architecture/project-architecture.component';

@NgModule({
  imports: [
    CommonModule,

    /** Angular Modules */
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    /** Material Modules */
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    // MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    // BrowserAnimationsModule,

    SpSearchAutocompleteModule,
    SpShowModule,
    SpPipesModule,
    DocViewerModule,
    ComponentHeaderModule,
    TableOfContentsModule,
    FlexLayoutModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    ContentLoadedModule,
  ],

  // pipes, directives, compoments
  declarations: [
    CodeImportInlineComponent,
    CodeTsBlockComponent,
    CodeHtmlInlineComponent,
    CodeScssBlockComponent,
    CodeBashInlineComponent,
    ApiTitleComponent,
    LinkHasValueComponent,
    TitleExampleComponent,
    ApiViewerComponent,
    GithubSpecComponent,
    SeeAlsoItemsComponent,
    VersionComponent,
    TabGroupComponent,
    TabOverviewComponent,
    TabApiComponent,
    TabExampleComponent,
    ALinkComponent,
    ApiHostDirective,
    OverviewHostDirective,
    ExampleHostDirective,
    MarkdownViewerComponent,
    CodeViewerComponent,
    ApiContainerComponent,
    ExampleContainerComponent,
    OverviewContainerComponent,
    GuideContainerComponent,
    H2LinkComponent,
    H3LinkComponent,
    H4LinkComponent,
    OverviewViewerComponent,
    ExampleViewerComponent,
    GuideContainerComponent,
    GuideViewerComponent,
    MarkdownContainerComponent,
    GuideTitleComponent,
    H2TitleComponent,
    H3TitleComponent,
    H4TitleComponent,
    CodeBashBlockComponent,
    CodeHtmlInlineComponent,
    CodeHtmlBlockComponent,
    CodeImportBlockComponent,
    CodeImportInlineComponent,
    CodeJsonBlockComponent,
    CodeJsonInlineComponent,
    CodeScssInlineComponent,
    CodeScssInlineComponent,
    CodeTsInlineComponent,
    CodeTsBlockComponent,
    CautionComponent,
    SeeDocComponentsComponent,
    SeeAlsoComponent,
    AngularMaterialInstallComponent,
    AngularMaterialComponent,
    MaterialDesignComponent,
    DocMaterialGithubComponent,
    DocCdkGithubComponent,
    AngularCliComponent,
    NgPackagrComponent,
    ProjectArchitectureComponent,
    AngularIoComponent,
    AngularPackageFormatComponent,
    AngularCdkComponent,
    SeeInstallIconsComponent,
  ],

  // pipes, directives, compoments, modules
  exports: [
    /** Angular Modules */
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,

    /** Material Modules */
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    // BrowserAnimationsModule,

    SpSearchAutocompleteModule,
    SpShowModule,
    SpPipesModule,
    DocViewerModule,
    CodeImportInlineComponent,
    CodeTsBlockComponent,
    CodeHtmlInlineComponent,
    CodeBashInlineComponent,
    ApiTitleComponent,
    LinkHasValueComponent,
    TitleExampleComponent,
    ApiViewerComponent,
    GithubSpecComponent,
    SeeAlsoItemsComponent,
    VersionComponent,
    ComponentHeaderModule,
    TabGroupComponent,
    TabOverviewComponent,
    TabApiComponent,
    TabExampleComponent,
    ALinkComponent,
    ApiHostDirective,
    OverviewHostDirective,
    ExampleHostDirective,
    MarkdownModule,
    MarkdownViewerComponent,
    TableOfContentsModule,
    CodeViewerComponent,
    ApiContainerComponent,
    ExampleContainerComponent,
    H2LinkComponent,
    H3LinkComponent,
    H4LinkComponent,
    OverviewContainerComponent,
    OverviewViewerComponent,
    GuideContainerComponent,
    GuideViewerComponent,
    MarkdownContainerComponent,
    GuideTitleComponent,
    H2TitleComponent,
    H3TitleComponent,
    H4TitleComponent,
    CodeBashBlockComponent,
    CodeHtmlInlineComponent,
    CodeHtmlBlockComponent,
    CodeImportBlockComponent,
    CodeImportInlineComponent,
    CodeJsonBlockComponent,
    CodeJsonInlineComponent,
    CodeScssInlineComponent,
    CodeScssInlineComponent,
    CodeTsInlineComponent,
    CodeTsBlockComponent,
    CautionComponent,
    SeeDocComponentsComponent,
    SeeAlsoComponent,
    AngularMaterialInstallComponent,
    AngularMaterialComponent,
    MaterialDesignComponent,
    DocMaterialGithubComponent,
    DocCdkGithubComponent,
    AngularCliComponent,
    NgPackagrComponent,
    ProjectArchitectureComponent,
    AngularIoComponent,
    AngularPackageFormatComponent,
    AngularCdkComponent,
    SeeInstallIconsComponent,
  ],
  providers: [CopierService, HighlightService],
})
export class SharedModule {
  static forRoot(): any {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
