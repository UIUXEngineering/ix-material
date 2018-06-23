import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'h2-link',
  templateUrl: './h2-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class H2LinkComponent {
  parsedAnchor: string;
  @Input('anchor')
  set anchor(val: string) {
    if (val) {
      this.parsedAnchor = val.replace(/\s/g, '-');
    }
  }
}
