import { TestBed, inject } from '@angular/core/testing';

import { MyDependentServiceService } from './my-dependent-service.service';

describe('MyDependentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyDependentServiceService],
    });
  });

  it('should be created', inject(
    [MyDependentServiceService],
    (service: MyDependentServiceService) => {
      expect(service).toBeTruthy();
    }
  ));
});
