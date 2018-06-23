import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocComponentsComponent } from './adding-docs-to-this-site/doc-components/doc-components.component';
import { GuideHTMLComponent } from './adding-docs-to-this-site/html/guide-html.component';
import { GuideMarkdownComponent } from './adding-docs-to-this-site/guide-markdown.component';
import { FirebaseComponent } from './getting-started/firebase/firebase.component';
import { InstallComponent } from './getting-started/install/install.component';
import { GuidesComponent } from './guides.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidesRoutingModule {}
