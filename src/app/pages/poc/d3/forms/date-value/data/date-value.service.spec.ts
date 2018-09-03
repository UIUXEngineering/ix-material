import { TestBed, inject } from '@angular/core/testing';

import { DateValueService } from './date-value.service';

describe('DateValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateValueService]
    });
  });

  it('should be created', inject([DateValueService], (service: DateValueService) => {
    expect(service).toBeTruthy();
  }));
});
