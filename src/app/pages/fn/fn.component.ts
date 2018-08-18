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
import { fadeAnimation } from '../../animations';
import { ApiRefService } from '../../services/api-ref/api-ref.service';
import { IRouteService, RouteService } from '../../services/route/route.service';

@Component({
  selector: 'app-fn',
  templateUrl: './fn.component.html',
  styleUrls: ['./fn.component.scss'],
  animations: [fadeAnimation],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FnComponent implements OnInit, OnDestroy {
  private _onRouteChange: Subscription = Subscription.EMPTY;
  topNav = '';

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
    this._onRouteChange = this._router.value.subscribe((e: IRouteService) => {
      this.topNav = e.base;
    });
  }

  ngOnDestroy(): void {
    this._onRouteChange.unsubscribe();
  }
}
