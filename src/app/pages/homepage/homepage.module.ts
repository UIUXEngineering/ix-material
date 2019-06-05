import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SpSearchAutocompleteModule } from '@uiux/material';
import { HomepageComponent, HomePageModel } from './homepage.component';
import { SvgViewerModule } from './svg-viewer/svg-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SvgViewerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    SpSearchAutocompleteModule,
    RouterModule,
  ],
  providers: [HomePageModel],
  exports: [HomepageComponent],
  declarations: [HomepageComponent],
})
export class HomepageModule {}
