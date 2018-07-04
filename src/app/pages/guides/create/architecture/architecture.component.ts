import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'architecture',
             templateUrl: './architecture.component.html',
             styleUrls: [ './architecture.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class ArchitectureComponent implements OnInit {
  data: IDataItem = ROUTES.guides.create.architecture;
  constructor() {
  }

  ngOnInit() {
  }

}
