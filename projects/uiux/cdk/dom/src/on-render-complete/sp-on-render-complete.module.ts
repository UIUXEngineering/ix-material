import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SP_ON_RENDER_COMPLETE_PROVIDER } from './sp-on-render-complete.service';
import { SpOnRenderCompleteComponent } from './sp-on-render-complete.component';

@NgModule({
  imports: [CommonModule],
  providers: [SP_ON_RENDER_COMPLETE_PROVIDER],
  declarations: [SpOnRenderCompleteComponent],
  exports: [SpOnRenderCompleteComponent],
})
export class SpOnRenderCompleteModule {}
