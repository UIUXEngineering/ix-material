import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ixCmpHost],[ixComponentHost]',
})
export class IxCmpHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
