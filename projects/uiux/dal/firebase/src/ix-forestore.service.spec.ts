import { TestBed, inject } from '@angular/core/testing';

import { IxForestoreService } from './ix-forestore.service';

describe('IxForestoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IxForestoreService]
    });
  });

  it('should be created', inject([IxForestoreService], (service: IxForestoreService) => {
    expect(service).toBeTruthy();
  }));
});
