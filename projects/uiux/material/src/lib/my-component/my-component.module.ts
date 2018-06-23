import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MyComponentComponent } from './my-component.component';
import { MY_DEPENDENT_SERVICE_PROVIDER } from './my-dependent-service.service';
import { MY_SERVICE_PROVIDER } from './my-service.service';

@NgModule({
  imports: [CommonModule, MatCommonModule],
  exports: [MyComponentComponent],
  declarations: [MyComponentComponent],
  providers: [MY_DEPENDENT_SERVICE_PROVIDER, MY_SERVICE_PROVIDER],
})
export class MyComponentModule {}
