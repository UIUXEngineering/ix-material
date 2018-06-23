import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss']
})
export class FirebaseComponent implements OnInit {

  data: IDataItem = ROUTES.guides['getting-started'].firebase;
  constructor() { }

  ngOnInit() {
  }

}
