import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cdk',
  templateUrl: './cdk.component.html',
  styleUrls: ['./cdk.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
