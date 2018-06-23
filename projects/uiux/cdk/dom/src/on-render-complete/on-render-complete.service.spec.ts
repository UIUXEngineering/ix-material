import { TestBed, inject } from '@angular/core/testing';

import { SpOnRenderCompleteService } from './sp-on-render-complete.service';

describe('SpOnRenderCompleteService', () => {
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
