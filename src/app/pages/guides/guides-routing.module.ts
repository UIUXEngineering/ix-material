import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialInstallComponent } from '../../shared/doc-components/common-links/angular-material-install.component';
import { DocComponentsComponent } from './adding-docs-to-this-site/doc-components/doc-components.component';
import { GuideHTMLComponent } from './adding-docs-to-this-site/html/guide-html.component';
import { GuideMarkdownComponent } from './adding-docs-to-this-site/guide-markdown.component';
import { ArchitectureComponent } from './create/architecture/architecture.component';
import { FirebaseComponent } from './getting-started/firebase/firebase.component';
import { InstallComponent } from './getting-started/install/install.component';
import { ReferencesComponent } from './getting-started/references/references.component';
import { GuidesComponent } from './guides.component';
import { CreateMaterialAppComponent } from './create/create-material-app/create-material-app.component';
import { AngularComponent } from './upgrade/angular/angular.component';

const routes: Routes = [
  {
    path: '',
    component: GuidesComponent,
    children: [
      {
        path: 'getting-started/install',
        component: InstallComponent,
      },
      {
        path: 'getting-started/firebase',
        component: FirebaseComponent,
      },
      {
        path: 'getting-started/references',
        component: ReferencesComponent,
      },
      {
        // end route matches route in `src/configs/nav-items.ts`
        path: 'adding-docs-to-this-site/doc-components',
        component: DocComponentsComponent,
      },
      {
        // end route matches route in `src/configs/nav-items.ts`
        path: 'adding-docs-to-this-site/html',
        component: GuideHTMLComponent,
      },
      {
        // end route matches route in `src/configs/nav-items.ts`
        path: 'adding-docs-to-this-site/markdown',
        component: GuideMarkdownComponent,
      },
      {
        path: 'upgrade/angular',
        component: AngularComponent,
      },
      {
        path: 'create/material-app',
        component: CreateMaterialAppComponent,
      },
      {
        path: 'create/architecture',
        component: ArchitectureComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidesRoutingModule {}
