import { async, TestBed } from '@angular/core/testing';
import { D3Module } from './d3.module';

describe('D3Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [D3Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(D3Module).toBeDefined();
  });
});
