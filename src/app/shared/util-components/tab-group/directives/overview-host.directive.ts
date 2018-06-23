import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appOverviewHost]',
})
export class OverviewHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
