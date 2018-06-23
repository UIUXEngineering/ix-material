import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'guide-title',
  templateUrl: './guide-title.component.html',
  styleUrls: ['./guide-title.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuideTitleComponent {
  @Input() public title = '';
  @Input() public link = '';

  constructor() {}
}
