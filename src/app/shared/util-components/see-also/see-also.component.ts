import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { IDataItem } from '../../../../models/routes';
import { ApiRefService } from '../../../services/api-ref/api-ref.service';

@Component({
  // tslint:disable-next-line
  selector: 'see-also',
  templateUrl: './see-also.component.html',
  styleUrls: ['./see-also.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SeeAlsoComponent {
  @Input('ref')
  set ref(_ref: string) {
    this.getDataItems(_ref);
  }

  item: IDataItem;

  constructor(private _apiRef: ApiRefService, private _cd: ChangeDetectorRef) {}

  getDataItems(ref: string): void {
    this.item = this._apiRef.getDataItem(ref);
    this._cd.markForCheck();
  }
}
