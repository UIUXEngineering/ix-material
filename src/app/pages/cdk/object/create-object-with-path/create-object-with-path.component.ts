import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'create-object-with-path',
  templateUrl: './create-object-with-path.component.html',
  styleUrls: ['./create-object-with-path.component.scss'],
})
export class CreateObjectWithPathComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.createObjectWithPath;
  constructor() {}

  ngOnInit() {}
}
