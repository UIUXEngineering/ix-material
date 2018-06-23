import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'h2-title',
  template: `<h2-link [anchor]="text">{{text}}</h2-link>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class H2TitleComponent {
  @Input('text') text: string;
}
