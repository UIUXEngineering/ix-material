import { TestBed, inject } from '@angular/core/testing';

import { RxjsService } from './rxjs.service';

describe('RxjsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RxjsService],
    });
  });

  it('should be created', inject([RxjsService], (service: RxjsService) => {
    expect(service).toBeTruthy();
  }));
});
