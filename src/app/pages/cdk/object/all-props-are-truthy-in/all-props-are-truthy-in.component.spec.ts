import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPropsAreTruthyInComponent } from './all-props-are-truthy-in.component';

describe('AllPropsAreTruthyInComponent', () => {
  let component: AllPropsAreTruthyInComponent;
  let fixture: ComponentFixture<AllPropsAreTruthyInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPropsAreTruthyInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPropsAreTruthyInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
