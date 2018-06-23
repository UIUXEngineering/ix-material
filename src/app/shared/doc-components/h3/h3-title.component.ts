import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'h3-title',
  template: `<h3-link [anchor]="text">{{text}}</h3-link>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class H3TitleComponent {
  @Input('text') text: string;
}
