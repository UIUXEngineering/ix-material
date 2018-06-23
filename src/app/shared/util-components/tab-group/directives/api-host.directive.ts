import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appApiHost]',
})
export class ApiHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
