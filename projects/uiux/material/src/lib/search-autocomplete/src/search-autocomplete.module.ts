/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpPipesModule } from '@uiux/cdk/pipes';
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
