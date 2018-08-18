import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FnComponent } from './fn.component';

describe('FnComponent', () => {
  let component: FnComponent;
  let fixture: ComponentFixture<FnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
