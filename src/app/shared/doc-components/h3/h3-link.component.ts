import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'h3-link',
  templateUrl: './h3-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class H3LinkComponent {
  parsedAnchor: string;
  @Input('anchor')
  set anchor(val: string) {
    if (val) {
      this.parsedAnchor = val.replace(/\s/g, '-');
    }
  }
}
