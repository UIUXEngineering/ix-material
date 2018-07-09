/**
 * @license
 * Copyright uiux Engineering Corporation All Rights Reserved.
 */
import { IxShowDirective } from './show.directive';
import { SimpleChange, SimpleChanges } from '@angular/core';

describe('ShowDirective', () => {
  let mockRenderer: any;
  let mockElementRef: any;

  beforeEach(() => {
    mockRenderer = {
      addClass: () => {
        /* noop */
      },
      removeClass: () => {
        /* noop */
      },
    };

    mockElementRef = {
      nativeElement: () => {
        /* noop */
      },
    };
  });

  afterEach(() => {
    mockRenderer = null;
    mockElementRef = null;
  });

  it('should create an instance', () => {
    const directive = new IxShowDirective(mockRenderer, mockElementRef);
    expect(directive).toBeTruthy();
  });

  it('should addClass', () => {
    spyOn(mockRenderer, 'addClass');
    spyOn(mockRenderer, 'removeClass');
    const directive = new IxShowDirective(mockRenderer, mockElementRef);

    const change: SimpleChange = new SimpleChange(null, true, true);

    directive.ngOnChanges(<SimpleChanges>{
      ['ixShow']: change,
    });

    expect(mockRenderer.addClass).toHaveBeenCalledTimes(2);
    expect(mockRenderer.removeClass).toHaveBeenCalledTimes(1);
  });

  it('should removeClass', () => {
    spyOn(mockRenderer, 'addClass');
    spyOn(mockRenderer, 'removeClass');
    const directive = new IxShowDirective(mockRenderer, mockElementRef);

    const change1: SimpleChange = new SimpleChange(null, true, true);
    directive.ngOnChanges(<SimpleChanges>{
      ['ixShow']: change1,
    });
    const change2: SimpleChange = new SimpleChange(null, false, true);

    directive.ngOnChanges(<SimpleChanges>{
      ['ixShow']: change2,
    });

    expect(mockRenderer.removeClass).toHaveBeenCalled();
    expect(mockRenderer.addClass).toHaveBeenCalledTimes(3);
  });
});
