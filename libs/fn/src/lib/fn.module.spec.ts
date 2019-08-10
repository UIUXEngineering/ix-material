import { async, TestBed } from '@angular/core/testing';
import { FnModule } from './fn.module';

describe('FnModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FnModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FnModule).toBeDefined();
  });
});
