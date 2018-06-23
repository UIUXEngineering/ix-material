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
import { map } from 'rxjs/operators/index';
import { Subscription } from 'rxjs/Subscription';
import { NAVBAR_MENU_BREAKPOINT } from '../../../configs/constants';
import { IDataItem } from '../../../models/routes';
import { fadeAnimation } from '../../animations';
import { ApiRefService, IRouteStore } from '../../services/api-ref/api-ref.service';
import { IRouteService, RouteService } from '../../services/route/route.service';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss'],
  animations: [fadeAnimation],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuidesComponent implements OnInit, OnDestroy {
  private _onRouteChange: Subscription = Subscription.EMPTY;
  private _navSub: Subscription = Subscription.EMPTY;
  topNav = '';
  guides: IDataItem[] = [];

  fixedTopGap = 52;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.app-route-animation') classAnimation = true;

  constructor(
    public nav: ApiRefService,
    private _router: RouteService,
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
    this._navSub = this.nav.value.subscribe((r: IRouteStore) => {
      this.guides = r.guides;
    });

    this._onRouteChange = this._router.value.subscribe((e: IRouteService) => {
      this.topNav = e.base;
    });
  }

  ngOnDestroy(): void {
    this._onRouteChange.unsubscribe();
    this._navSub.unsubscribe();
  }
}
