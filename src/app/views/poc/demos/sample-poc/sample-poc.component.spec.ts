import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePocComponent } from './sample-poc.component';

describe('SamplePocComponent', () => {
  let component: SamplePocComponent;
  let fixture: ComponentFixture<SamplePocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SamplePocComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
