import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'a-link',
  template: `<a class="link-primary" href="{{href}}" target="_blank">
    <ng-content></ng-content>
  </a>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class ALinkComponent {
  @Input('href') public href: string;
}
