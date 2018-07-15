import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderSampleComponent } from './form-builder-sample.component';

describe('FormBuilderSampleComponent', () => {
  let component: FormBuilderSampleComponent;
  let fixture: ComponentFixture<FormBuilderSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilderSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
