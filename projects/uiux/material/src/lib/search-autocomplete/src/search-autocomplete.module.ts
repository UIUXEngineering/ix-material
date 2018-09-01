/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { SpPipesModule } from './pipes/pipes.module';
import { SP_SEARCH_AUTOCOMPLETE_FORMGROUP_PROVIDER } from './search-autocomplete-form-group.service';
import { SpSearchAutoCompleteComponent } from './search-autocomplete.component';
import { SpFormBuilderServiceModule } from '@uiux/cdk/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    SpPipesModule,
    SpFormBuilderServiceModule,
  ],
  declarations: [SpSearchAutoCompleteComponent],
  providers: [SP_SEARCH_AUTOCOMPLETE_FORMGROUP_PROVIDER],
  exports: [SpSearchAutoCompleteComponent],
})
export class SpSearchAutocompleteModule {}
