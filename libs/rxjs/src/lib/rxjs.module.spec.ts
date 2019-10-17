import { async, TestBed } from '@angular/core/testing';
import { RxjsModule } from './rxjs.module';

describe('RxjsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RxjsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RxjsModule).toBeDefined();
  });
});
