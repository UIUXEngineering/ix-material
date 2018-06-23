import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab-overview',
  exportAs: 'ixTabOverview, app-tab-overview',
  templateUrl: './tab-overview.component.html',
  styleUrls: ['./tab-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class TabOverviewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
