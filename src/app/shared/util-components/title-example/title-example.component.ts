import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'title-example',
  templateUrl: './title-example.component.html',
  styleUrls: ['./title-example.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleExampleComponent {
  @Input('example') example: string;
}
