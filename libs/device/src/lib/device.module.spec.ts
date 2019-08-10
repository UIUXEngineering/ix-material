import { async, TestBed } from '@angular/core/testing';
import { DeviceModule } from './device.module';

describe('DeviceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DeviceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DeviceModule).toBeDefined();
  });
});
