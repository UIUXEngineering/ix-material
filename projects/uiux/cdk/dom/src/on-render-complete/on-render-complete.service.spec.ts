import { TestBed, inject } from '@angular/core/testing';

import { SpOnRenderCompleteService } from './ix-on-render-complete.service';

describe('IxOnRenderCompleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpOnRenderCompleteService],
    });
  });

  it(
    'should be created',
    inject([SpOnRenderCompleteService], (service: SpOnRenderCompleteService) => {
      expect(service).toBeTruthy();
    })
  );
});
