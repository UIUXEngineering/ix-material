import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DocComponentsComponent } from './adding-docs-to-this-site/doc-components/doc-components.component';
import { GuideHTMLComponent } from './adding-docs-to-this-site/html/guide-html.component';
import { GuideMarkdownComponent } from './adding-docs-to-this-site/guide-markdown.component';
import { InstallComponent } from './getting-started/install/install.component';
import { ReferencesStoreService } from './getting-started/references/_store/references-store.service';

import { GuidesRoutingModule } from './guides-routing.module';
import { GuidesComponent } from './guides.component';
import { FirebaseComponent } from './getting-started/firebase/firebase.component';
import { AngularComponent } from './upgrade/angular/angular.component';
import { CreateMaterialAppComponent } from './create/create-material-app/create-material-app.component';
import { ArchitectureComponent } from './create/architecture/architecture.component';
import { ReferencesComponent } from './getting-started/references/references.component';

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
    ArchitectureComponent,
    ReferencesComponent,
  ],
  providers: [
    ReferencesStoreService,
  ]
})
export class GuidesModule {}
