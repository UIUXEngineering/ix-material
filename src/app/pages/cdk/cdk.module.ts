import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkRoutingModule } from './cdk-routing.module';
import { CdkComponent } from './cdk.component';

@NgModule({
  imports: [
    CommonModule,
    CdkRoutingModule
  ],
  declarations: [CdkComponent]
})
export class CdkModule { }
