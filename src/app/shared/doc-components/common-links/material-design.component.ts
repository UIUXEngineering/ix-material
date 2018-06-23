import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'material-design',
  template: `<a-link [href]="'https://material.io/design/introduction/'">Material Design</a-link>`,
  encapsulation: ViewEncapsulation.None,
})
export class MaterialDesignComponent {}
