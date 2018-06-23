import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  // tslint:disable-next-line
  selector: 'adding-components',
  templateUrl: './adding-components.component.html',
  styleUrls: ['./adding-components.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddingComponentsComponent {
  data: IDataItem = ROUTES.material.guide['adding-components'];

  importMatCommonModule = `
  imports: [
    CommonModule,
    MatCommonModule,
  ],`;

  componentMetaData = `
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  `;

  finalComponent = `
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sp-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}`;

  finalModule = `
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MyComponentComponent } from './my-component.component';
import {
  MY_DEPENDENT_SERVICE_PROVIDER
  } from './my-dependent-service.service';
import { MY_SERVICE_PROVIDER } from './my-service.service';

@NgModule({
  imports: [
    CommonModule,
    MatCommonModule,
  ],
  exports: [MyComponentComponent],
  declarations: [MyComponentComponent],
  providers: [MY_DEPENDENT_SERVICE_PROVIDER, MY_SERVICE_PROVIDER],
})
export class MyComponentModule { }

`;

  singletonService = `
  /**
   * Creates an instance of MyServiceService if
   * one has not already been created.
   * @param parentDispatcher
   * @param depService injecting MyDependentServiceService
   * @docs-private
   */
  export function _MY_SERVICE_FACTORY(
      parentDispatcher: MyServiceService,
      depService: MyDependentServiceService): MyServiceService {
    return parentDispatcher || new MyServiceService(depService);
  }

  export const MY_SERVICE_PROVIDER = {
    provide: MyServiceService,
    deps: [
      [new Optional(), new SkipSelf(), MyServiceService], MyDependentServiceService
    ],
    useFactory: _MY_SERVICE_FACTORY,
  };
  `;

  singletonDependencyService = `
  /**
   * This service will be injected into another service.
   * @docs-private */
    export function _MY_DEPENDENT_SERVICE_FACTORY(
        parentDispatcher: MyDependentServiceService): MyDependentServiceService {

      return parentDispatcher || new MyDependentServiceService();
    }

    export const MY_DEPENDENT_SERVICE_PROVIDER = {
      provide: MyDependentServiceService,
      deps: [
        [new Optional(), new SkipSelf(), MyDependentServiceService]
      ],
      useFactory: _MY_DEPENDENT_SERVICE_FACTORY,
    };
  `;

  providersInModule = 'providers: [' + 'MY_DEPENDENT_SERVICE_PROVIDER,' + 'MY_SERVICE_PROVIDER],';

  myService = `
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { MyDependentServiceService } from './my-dependent-service.service';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private depService: MyDependentServiceService) { }
}

/**
 * Creates an instance of MyServiceService if
 * one has not already been created.
 * @param parentDispatcher
 * @param depService injecting MyDependentServiceService
 * @docs-private
 */
export function _MY_SERVICE_FACTORY(
     parentDispatcher: MyServiceService,
    depService: MyDependentServiceService): MyServiceService {
  return parentDispatcher || new MyServiceService(depService);
}

export const MY_SERVICE_PROVIDER = {
  provide: MyServiceService,
  deps: [
    [new Optional(), new SkipSelf(), MyServiceService],
    MyDependentServiceService
  ],
  useFactory: _MY_SERVICE_FACTORY,
};


  `;

  myDependentService = `
import { Injectable, Optional, SkipSelf } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDependentServiceService {

  constructor() { }
}

/**
 * This service will be injected into another service.
 * @docs-private */
export function _MY_DEPENDENT_SERVICE_FACTORY(
  parentDispatcher: MyDependentServiceService): MyDependentServiceService {
  return parentDispatcher || new MyDependentServiceService();
}

export const MY_DEPENDENT_SERVICE_PROVIDER = {
  provide: MyDependentServiceService,
  deps: [
    [new Optional(), new SkipSelf(), MyDependentServiceService]
  ],
  useFactory: _MY_DEPENDENT_SERVICE_FACTORY,
};

  `;
}
