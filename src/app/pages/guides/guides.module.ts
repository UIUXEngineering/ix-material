import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DocComponentsComponent } from './adding-docs-to-this-site/doc-components/doc-components.component';
import { GuideHTMLComponent } from './adding-docs-to-this-site/html/guide-html.component';
import { GuideMarkdownComponent } from './adding-docs-to-this-site/guide-markdown.component';
import { InstallComponent } from './getting-started/install/install.component';

import { GuidesRoutingModule } from './guides-routing.module';
import { GuidesComponent } from './guides.component';
import { FirebaseComponent } from './getting-started/firebase/firebase.component';
import { AngularComponent } from './upgrade/angular/angular.component';
import { CreateMaterialAppComponent } from './create/create-material-app/create-material-app.component';

@NgModule({
  imports: [CommonModule, SharedModule, GuidesRoutingModule],
  declarations: [
    DocComponentsComponent,
    GuidesComponent,
    GuideHTMLComponent,
    GuideMarkdownComponent,
    InstallComponent,
    FirebaseComponent,
    AngularComponent,
    CreateMaterialAppComponent,
  ],
})
export class GuidesModule {}
