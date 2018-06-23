import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'sp-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyComponentComponent implements OnInit {
  constructor(private service: MyServiceService) {}

  ngOnInit() {}
}
