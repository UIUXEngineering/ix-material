import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'h4-title',
  template: `<h4-link [anchor]="text">{{text}}</h4-link>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class H4TitleComponent {
  @Input('text') text: string;
}
