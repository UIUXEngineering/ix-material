import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { getIn } from '@uiux/fn/common';
import { map } from 'rxjs/operators/index';
import { Subscription } from 'rxjs';
import { NAVBAR_MENU_BREAKPOINT } from '../../../configs/constants';
import { IDataItem } from '../../../models/routes';
import { fadeAnimation } from '../../animations';
import { ApiRefService, IRouteStore } from '../../services/api-ref/api-ref.service';

@Component({
  selector: 'theme',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss'],
  animations: [fadeAnimation],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemesComponent implements OnInit, OnDestroy {
  private _onRouteChange: Subscription = Subscription.EMPTY;
  topNav = '';
  parentDocRoute: string;
  showNav = false;
  items: IDataItem[] = [];

  fixedTopGap = 52;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.app-route-animation') classAnimation = true;

  constructor(
    private _router: ApiRefService,
    private _cd: ChangeDetectorRef,
    breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver
      .observe(NAVBAR_MENU_BREAKPOINT)
      .pipe(map((result) => result.matches))
      .subscribe((r) => {
        this.fixedTopGap = r ? 96 : 52;
        this._cd.markForCheck();
      });
  }

  ngOnInit(): void {
    this._onRouteChange = this._router.value.subscribe((e: IRouteStore) => {
      this.items = e.themes;
      this.topNav = e.route.base;
      this.parentDocRoute = getIn(e, 'currentRouteData.route', null);
      this.showNav = true;
      this._cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this._onRouteChange.unsubscribe();
  }
}
