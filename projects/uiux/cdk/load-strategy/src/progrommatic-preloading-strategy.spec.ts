/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { IRouteWithData, ProgrammaticPreloadingStrategy } from './progrommatic-preloading-strategy';
import { of } from 'rxjs/observable/of';

describe('programmatic-preloading-strategy', () => {
  it('should not preload', () => {
    const preloader: ProgrammaticPreloadingStrategy = new ProgrammaticPreloadingStrategy();

    const loadSpy = jasmine.createSpy('load').and.returnValue(of(null));

    const route: IRouteWithData = {
      path: 'some-path',
      data: {
        preload: false,
      },
    };

    preloader.preload(route, loadSpy);
    // .subscribe(() => {
    //   expect(loadSpy).not.toHaveBeenCalled();
    //   done();
    // }, (error: any) => {
    //   done.fail(error);
    // }, () => {
    //   // done.fail();
    // });
    expect(loadSpy).not.toHaveBeenCalled();
  });

  it('should load if preload true', () => {
    const preloader: ProgrammaticPreloadingStrategy = new ProgrammaticPreloadingStrategy();

    const loadSpy = jasmine.createSpy('load').and.returnValue(of(null));

    const route: IRouteWithData = {
      path: 'some-path',
      data: {
        preload: true,
      },
    };

    preloader.preload(route, loadSpy);
    // .subscribe(() => {
    //   expect(loadSpy).toHaveBeenCalled();
    //   done();
    // }, (error: any) => {
    //   done.fail(error);
    // }, () => {
    //   // done.fail();
    // });
    expect(loadSpy).toHaveBeenCalled();
  });

  it('should return null with path defined as **', () => {
    const preloader: ProgrammaticPreloadingStrategy = new ProgrammaticPreloadingStrategy();

    const loadSpy = jasmine.createSpy('load');

    const route: IRouteWithData = {
      path: '**',
      data: {
        preload: true,
      },
    };

    preloader.preload(route, loadSpy);
    // .subscribe(() => {
    //   expect(loadSpy).not.toHaveBeenCalled();
    //   done();
    // }, (error: any) => {
    //   done.fail(error);
    // }, () => {
    //   // done.fail();
    // });

    expect(loadSpy).toHaveBeenCalled();
  });

  it('should not load with no path and no preload', () => {
    const preloader: ProgrammaticPreloadingStrategy = new ProgrammaticPreloadingStrategy();

    const loadSpy = jasmine.createSpy('load');

    const route: IRouteWithData = {
      // path: 'some-path',
      data: {
        preload: false,
      },
    };

    preloader.preload(route, loadSpy);
    // .subscribe(() => {
    //   expect(loadSpy).not.toHaveBeenCalled();
    //   done();
    // }, (error: any) => {
    //   done.fail(error);
    // }, () => {
    //   // done.fail();
    // });

    expect(loadSpy).not.toHaveBeenCalled();
  });

  it('should not load if load([path]) called with different path', () => {
    const preloader: ProgrammaticPreloadingStrategy = new ProgrammaticPreloadingStrategy();

    const loadSpy = jasmine.createSpy('load');

    const route: IRouteWithData = {
      path: 'some-path',
    };

    preloader.preload(route, loadSpy);
    // .subscribe(() => {
    //   done();
    // }, (error: any) => {
    //   done.fail(error);
    // }, () => {
    //   // done.fail();
    // });

    preloader.load('other-path');
    expect(loadSpy).not.toHaveBeenCalled();
  });

  it('should not load with if load([path]) is not called', () => {
    const preloader: ProgrammaticPreloadingStrategy = new ProgrammaticPreloadingStrategy();

    const loadSpy = jasmine.createSpy('load');

    const route: IRouteWithData = {
      path: 'some-path',
    };

    preloader.preload(route, loadSpy);
    // .subscribe(() => {
    //   expect(loadSpy).not.toHaveBeenCalled();
    //   done();
    // }, (error: any) => {
    //   done.fail(error);
    // }, () => {
    //   // done.fail();
    // });
    expect(loadSpy).not.toHaveBeenCalled();
  });

  it('should not load with path undefined', () => {
    const preloader: ProgrammaticPreloadingStrategy = new ProgrammaticPreloadingStrategy();

    const loadSpy = jasmine.createSpy('load');

    const route: IRouteWithData = {
      // path: 'some-path',
    };

    preloader.preload(route, loadSpy);
    // .subscribe(() => {
    //   expect(loadSpy).not.toHaveBeenCalled();
    //   done();
    // }, (error: any) => {
    //   done.fail(error);
    // }, () => {
    //   // done.fail();
    // });

    expect(loadSpy).not.toHaveBeenCalled();
  });
});
