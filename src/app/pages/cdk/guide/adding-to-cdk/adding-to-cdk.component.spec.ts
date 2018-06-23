import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingToCdkComponent } from './adding-to-cdk.component';

describe('AddingToCdkComponent', () => {
  let component: AddingToCdkComponent;
  let fixture: ComponentFixture<AddingToCdkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddingToCdkComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingToCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
