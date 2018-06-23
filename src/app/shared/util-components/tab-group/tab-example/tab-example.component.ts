import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab-example',
  exportAs: 'ixTabExample, app-tab-example',
  templateUrl: './tab-example.component.html',
  styleUrls: ['./tab-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class TabExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
