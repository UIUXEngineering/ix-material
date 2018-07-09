import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPropsHaveValueInComponent } from './all-props-have-value-in.component';

describe('AllPropsHaveValueInComponent', () => {
  let component: AllPropsHaveValueInComponent;
  let fixture: ComponentFixture<AllPropsHaveValueInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllPropsHaveValueInComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPropsHaveValueInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
