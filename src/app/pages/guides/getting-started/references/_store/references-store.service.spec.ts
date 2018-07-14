import { TestBed, inject } from '@angular/core/testing';

import { ReferencesStoreService } from './references-store.service';

describe('ReferencesStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferencesStoreService]
    });
  });

  it('should be created', inject([ReferencesStoreService], (service: ReferencesStoreService) => {
    expect(service).toBeTruthy();
  }));
});
