import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'guide-getting-started-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss'],
})
export class InstallComponent implements OnInit {
  data: IDataItem = ROUTES.guides['getting-started'].install;
  constructor() {}

  ngOnInit() {}

  onError(data: any): void {
    console.log(data);
  }
}
