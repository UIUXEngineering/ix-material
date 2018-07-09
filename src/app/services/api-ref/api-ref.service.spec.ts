import { TestBed, inject } from '@angular/core/testing';

import { ApiRefService } from './api-ref.service';

describe('RouteRefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiRefService],
    });
  });

  it('should be created', inject([ApiRefService], (service: ApiRefService) => {
    expect(service).toBeTruthy();
  }));
});
