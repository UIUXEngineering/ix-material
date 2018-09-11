import { NgModule } from '@angular/core';
import { IxCmpHostDirective } from './ixCmpHost.directive';
import { IxBrowserModule } from '@uiux/cdk/browser';
import { IxDynamicComponentService } from './ixDynamicComponentService';

@NgModule({
  imports: [IxBrowserModule],
  declarations: [IxCmpHostDirective],
  exports: [IxCmpHostDirective],
  providers: [IxDynamicComponentService]
})
export class IxDynamicComponentsModule {}
