import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appExampleHost]',
})
export class ExampleHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
