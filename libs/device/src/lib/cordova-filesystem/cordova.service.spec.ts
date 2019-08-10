import { TestBed } from '@angular/core/testing';

import { SptCordovaFileService } from './spt-cordova-file.service';

describe('SptCordovaFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SptCordovaFileService = TestBed.get(SptCordovaFileService);
    expect(service).toBeTruthy();
  });
});
