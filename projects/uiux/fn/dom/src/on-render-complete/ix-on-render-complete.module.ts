import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IX_ON_RENDER_COMPLETE_PROVIDER } from './ix-on-render-complete.service';
import { IxOnRenderCompleteComponent } from './ix-on-render-complete.component';

@NgModule({
  imports: [CommonModule],
  providers: [IX_ON_RENDER_COMPLETE_PROVIDER],
  declarations: [IxOnRenderCompleteComponent],
  exports: [IxOnRenderCompleteComponent],
})
export class IxOnRenderCompleteModule {}
