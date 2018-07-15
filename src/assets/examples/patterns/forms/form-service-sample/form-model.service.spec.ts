import { TestBed, inject } from '@angular/core/testing';

import { FormModelService } from './form-model.service';

describe('FormModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormModelService]
    });
  });

  it('should be created', inject([FormModelService], (service: FormModelService) => {
    expect(service).toBeTruthy();
  }));
});
