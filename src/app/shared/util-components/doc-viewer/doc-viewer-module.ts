import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import {StackblitzButtonModule} from '../stackblitz/stackblitz-button';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CopierService } from '../../services/copier/copier.service';
import { ExampleViewerTsComponent } from '../example-viewer-ts/example-viewer-ts.component';
import { DocViewerComponent } from './doc-viewer.component';
import { ExampleDemoViewerComponent } from './example-demo-viewer/example-demo-viewer.component';
import { HeaderLinkComponent } from './header-link.component';

// ExampleViewer is included in the DocViewerModule because they have a circular dependency.
@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTabsModule,
    CommonModule,
    PortalModule,
    // StackblitzButtonModule
  ],
  providers: [CopierService],
  declarations: [
    DocViewerComponent,
    ExampleDemoViewerComponent,
    HeaderLinkComponent,
    ExampleViewerTsComponent,
  ],
  entryComponents: [ExampleDemoViewerComponent, HeaderLinkComponent, ExampleViewerTsComponent],
  exports: [
    DocViewerComponent,
    ExampleDemoViewerComponent,
    HeaderLinkComponent,
    ExampleViewerTsComponent,
  ],
})
export class DocViewerModule {}
