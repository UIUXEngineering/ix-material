import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { IDataItem } from '../../../../../../models/routes';
import { AbstractDocCompoment } from '../../../../../shared/util-components/tab-group/abstract-doc-compoment';

@Component({
  selector: 'app-menu-overview',
  templateUrl: './menu-overview.component.html',
  styleUrls: ['./menu-overview.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class MenuOverviewComponent extends AbstractDocCompoment implements OnInit {
  @Input('data') public data: IDataItem;

  ngOnInit() {}
}
