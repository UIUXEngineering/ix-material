import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'api-title',
  templateUrl: './api-title.component.html',
  styleUrls: ['./api-title.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiTitleComponent {
  @Input() public title = '';
  @Input() public link = '';

  constructor() {}
}
