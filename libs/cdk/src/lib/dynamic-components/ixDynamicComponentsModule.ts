import { NgModule } from '@angular/core';
import { IxBrowserModule } from '../browser/ixBrowserModule';
import { IxCmpHostDirective } from './ixCmpHost.directive';
import { IxDynamicComponentService } from './ixDynamicComponentService';

@NgModule({
  imports: [IxBrowserModule],
  declarations: [IxCmpHostDirective],
  exports: [IxCmpHostDirective],
  providers: [IxDynamicComponentService],
})
export class IxDynamicComponentsModule {}
