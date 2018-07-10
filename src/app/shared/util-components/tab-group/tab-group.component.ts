import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { ZipSubject } from '@uiux/cdk/rxjs';
import { Subscription } from 'rxjs/Subscription';
import { hasValueIn } from '../../../../../projects/uiux/cdk/object';
import { IDataItem } from '../../../../models/routes';
import { ApiRefService, IRouteStore } from '../../../services/api-ref/api-ref.service';
import { AbstractDocCompoment } from './abstract-doc-compoment';
import { ApiHostDirective } from './directives/api-host.directive';
import { ExampleHostDirective } from './directives/example-host.directive';
import { OverviewHostDirective } from './directives/overview-host.directive';
import { TabItem } from './tab-item';

const childViewsRendered: any = {
  tab: null,
};

enum SelectedIndex {
  overview,
  api,
  examples,
}

@Component({
             selector: 'app-tab-group',
             templateUrl: './tab-group.component.html',
             styleUrls: [ './tab-group.component.scss' ],
             changeDetection: ChangeDetectionStrategy.OnPush,
             encapsulation: ViewEncapsulation.None,
             preserveWhitespaces: false,
           })
export class TabGroupComponent implements OnInit, AfterViewInit, OnDestroy {
  private _apiRefSub: Subscription = Subscription.EMPTY;
  private _renderedSub: Subscription = Subscription.EMPTY;
  private _viewContainerRefSet = false;
  private _rendered: ZipSubject<any> = new ZipSubject<any>(childViewsRendered);

  showTabs = false;
  selectedIndex: number | string = 0;

  @ViewChild(OverviewHostDirective) overviewHost: OverviewHostDirective;
  @ViewChild(ApiHostDirective) apiHost: ApiHostDirective;
  @ViewChild(ExampleHostDirective) exampleHost: ExampleHostDirective;

  constructor(
    private _apiRef: ApiRefService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private _cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    /* stub */
  }

  subscribeToViews(): void {
    if ( !this._renderedSub.closed ) {
      this._renderedSub.unsubscribe();
    }

    this._renderedSub = this._rendered.subscribe(( r: any ) => {
      this._cd.detectChanges();
      setTimeout(() => {
        this.selectedIndex = SelectedIndex[ r.tab ];
        this._cd.markForCheck();
        setTimeout(() => {
          this.showTabs = true;
          this._cd.markForCheck();
        }, 500);
      }, 500);
    });
  }

  ngAfterViewInit(): void {
    this._apiRefSub = this._apiRef.value.subscribe(( r: IRouteStore ) => {
      if ( !this._viewContainerRefSet ) {
        this._viewContainerRefSet = true;
        const tabGroup: TabItem = r.currentRouteData.tabItem;

        if ( tabGroup && tabGroup.overviewComponent ) {
          childViewsRendered.overview = null;
        }

        if ( tabGroup && tabGroup.apiComponent ) {
          childViewsRendered.api = null;
        }

        if ( tabGroup && tabGroup.exampleComponent ) {
          childViewsRendered.examples = null;
        }

        if ( tabGroup && tabGroup.overviewComponent ) {
          this.loadOverviewComponent(tabGroup, r.currentRouteData);
        }

        if ( tabGroup && tabGroup.apiComponent ) {
          this.loadApiComponent(tabGroup, r.currentRouteData);
        }

        if ( tabGroup && tabGroup.exampleComponent ) {
          this.loadExampleComponent(tabGroup, r.currentRouteData);
        }

        this.subscribeToViews();

        if ( hasValueIn(r, 'route.tab') ) {
          this._rendered.nextKey('tab', r.route.tab);
        }
      }
    });
  }

  loadOverviewComponent( c: TabItem, data: IDataItem ) {
    const componentFactory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(c.overviewComponent);
    const viewContainerRef: ViewContainerRef = this.overviewHost.viewContainerRef;
    viewContainerRef.clear();

    // if want to add data to component
    const componentRef: ComponentRef<AbstractDocCompoment> = viewContainerRef.createComponent(
      componentFactory,
    );
    (<any>componentRef.instance).data = data;

    this._rendered.nextKey('overview', true);
  }

  loadApiComponent( c: TabItem, data: IDataItem ) {
    const componentFactory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(c.apiComponent);
    const viewContainerRef: ViewContainerRef = this.apiHost.viewContainerRef;
    viewContainerRef.clear();

    // if want to add data to component
    const componentRef: ComponentRef<AbstractDocCompoment> = viewContainerRef.createComponent(
      componentFactory,
    );
    (<any>componentRef.instance).data = data;

    this._rendered.nextKey('api', true);
  }

  loadExampleComponent( c: TabItem, data: IDataItem ) {
    const componentFactory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(c.exampleComponent);
    const viewContainerRef: ViewContainerRef = this.exampleHost.viewContainerRef;
    viewContainerRef.clear();

    // if want to add data to component
    const componentRef: ComponentRef<AbstractDocCompoment> = viewContainerRef.createComponent(
      componentFactory,
    );
    (<any>componentRef.instance).data = data;

    this._rendered.nextKey('examples', true);
  }

  selectTab( e: MatTabChangeEvent ): void {
    this._apiRef.selectDocTab(SelectedIndex[ e.index ]);
  }

  ngOnDestroy(): void {
    this._apiRefSub.unsubscribe();
    this._renderedSub.unsubscribe();
  }
}
