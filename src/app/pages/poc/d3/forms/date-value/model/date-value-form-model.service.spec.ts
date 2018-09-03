import { TestBed, inject } from '@angular/core/testing';

import { DateValueFormModelService } from './date-value-model.service';

describe('DateValueModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateValueFormModelService]
    });
  });

  it('should be created', inject([DateValueFormModelService], (service: DateValueFormModelService) => {
    expect(service).toBeTruthy();
  }));
});
