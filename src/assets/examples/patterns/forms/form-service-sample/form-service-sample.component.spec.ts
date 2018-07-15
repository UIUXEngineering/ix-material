import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServiceSampleComponent } from './form-service-sample.component';

describe('FormServiceSampleComponent', () => {
  let component: FormServiceSampleComponent;
  let fixture: ComponentFixture<FormServiceSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormServiceSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormServiceSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
