import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MATERIAL_SANITY_CHECKS } from '@angular/material';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [RouterTestingModule, HttpClientModule],
  exports: [RouterTestingModule],
  providers: [HttpClient, { provide: MATERIAL_SANITY_CHECKS, useValue: false }],
})
export class DocsAppTestingModule {}
