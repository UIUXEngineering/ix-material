/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FORM_BUILDER_FACTORY_PROVIDER } from './form-builder-factory.service';

@NgModule({
  imports: [CommonModule],
  exports: [],
  providers: [FORM_BUILDER_FACTORY_PROVIDER],
})
export class SpFormBuilderServiceModule {}
