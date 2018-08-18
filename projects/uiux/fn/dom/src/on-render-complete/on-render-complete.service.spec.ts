import { TestBed, inject } from '@angular/core/testing';

import { IxOnRenderCompleteService } from './ix-on-render-complete.service';

describe('IxOnRenderCompleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IxOnRenderCompleteService],
    });
  });

  it('should be created', inject(
    [IxOnRenderCompleteService],
    (service: IxOnRenderCompleteService) => {
      expect(service).toBeTruthy();
    }
  ));
});
