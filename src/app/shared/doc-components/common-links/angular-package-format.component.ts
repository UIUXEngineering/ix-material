import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular-package-format',
  template: `<a-link [href]="href">Angular Package Format</a-link>`,
  encapsulation: ViewEncapsulation.None,
})
export class AngularPackageFormatComponent {
  href =
    'https://docs.google.com/document/d/' + '1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview';
}
