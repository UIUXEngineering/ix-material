import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'h4-link',
  templateUrl: './h4-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class H4LinkComponent {
  parsedAnchor: string;
  @Input('anchor')
  set anchor(val: string) {
    if (val) {
      this.parsedAnchor = val.replace(/\s/g, '-');
    }
  }
}
