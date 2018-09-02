import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dal',
  templateUrl: './dal.component.html',
  styleUrls: ['./dal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
