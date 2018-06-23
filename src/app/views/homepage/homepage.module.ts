import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTableModule,
} from '@angular/material';
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
