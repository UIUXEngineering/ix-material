import { TestBed, inject } from '@angular/core/testing';

import { IxCdkService } from './ix-cdk.service';

describe('IxCdkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IxCdkService],
    });
  });

  it('should be created', inject([IxCdkService], (service: IxCdkService) => {
    expect(service).toBeTruthy();
  }));
});
