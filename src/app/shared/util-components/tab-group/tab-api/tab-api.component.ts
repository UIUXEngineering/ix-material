import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab-api',
  exportAs: 'ixTabApi, app-tab-api',
  templateUrl: './tab-api.component.html',
  styleUrls: ['./tab-api.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class TabApiComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
