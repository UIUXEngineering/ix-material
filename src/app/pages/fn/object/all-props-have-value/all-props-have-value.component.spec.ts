import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPropsHaveValueComponent } from './all-props-have-value.component';

describe('AllPropsHaveValueComponent', () => {
  let component: AllPropsHaveValueComponent;
  let fixture: ComponentFixture<AllPropsHaveValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllPropsHaveValueComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPropsHaveValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
