import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergePropsIfNoValueComponent } from './merge-props-if-no-value.component';

describe('MergePropsIfNoValueComponent', () => {
  let component: MergePropsIfNoValueComponent;
  let fixture: ComponentFixture<MergePropsIfNoValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergePropsIfNoValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergePropsIfNoValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
