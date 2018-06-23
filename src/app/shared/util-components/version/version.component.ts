import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class VersionComponent {
  @Input('version') public version: string;
}
