import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'is-match',
  templateUrl: './is-match.component.html',
  styleUrls: ['./is-match.component.scss'],
})
export class IsMatchComponent implements OnInit {
  data: IDataItem = ROUTES.fn.object.isMatch;

  constructor() {}

  ngOnInit() {}
}
