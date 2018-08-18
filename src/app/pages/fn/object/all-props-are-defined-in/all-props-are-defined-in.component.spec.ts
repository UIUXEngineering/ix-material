import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPropsAreDefinedInComponent } from './all-props-are-defined-in.component';

describe('AllPropsAreDefinedInComponent', () => {
  let component: AllPropsAreDefinedInComponent;
  let fixture: ComponentFixture<AllPropsAreDefinedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllPropsAreDefinedInComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPropsAreDefinedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
