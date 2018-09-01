import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { hasValue } from '@uiux/fn/common';
import { IDataItem } from '../../../../models/routes';
import { ApiRefService } from '../../../services/api-ref/api-ref.service';

@Component({
  selector: 'see-also-items',
  templateUrl: './see-also-items.component.html',
  styleUrls: ['./see-also-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SeeAlsoItemsComponent {
  @Input('data')
  set data(_data: string[]) {
    this.getDataItems(_data);
  }

  items: IDataItem[] = [];

  constructor(private _apiRef: ApiRefService, private _cd: ChangeDetectorRef) {}

  getDataItems(data: string[]): void {
    if (hasValue(data)) {
      this.items = data.map((ref: string) => {
        return this._apiRef.getDataItem(ref);
      });
      this._cd.markForCheck();
    }
  }
}
