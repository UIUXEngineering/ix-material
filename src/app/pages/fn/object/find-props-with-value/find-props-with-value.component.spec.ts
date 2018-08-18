import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPropsWithValueComponent } from './find-props-with-value.component';

describe('FindPropsWithValueComponent', () => {
  let component: FindPropsWithValueComponent;
  let fixture: ComponentFixture<FindPropsWithValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FindPropsWithValueComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPropsWithValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
