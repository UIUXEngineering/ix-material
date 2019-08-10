import { async, TestBed } from '@angular/core/testing';
import { IconsModule } from './icons.module';

describe('IconsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IconsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IconsModule).toBeDefined();
  });
});
