import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsScalarComponent } from './is-scalar.component';

describe('IsScalarComponent', () => {
  let component: IsScalarComponent;
  let fixture: ComponentFixture<IsScalarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsScalarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsScalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
