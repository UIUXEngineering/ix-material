import { TestBed, inject } from '@angular/core/testing';

import { FnService } from './fn.service';

describe('FnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FnService]
    });
  });

  it('should be created', inject([FnService], (service: FnService) => {
    expect(service).toBeTruthy();
  }));
});
