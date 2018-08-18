import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPropertiesComponent } from './find-properties.component';

describe('FindPropertiesComponent', () => {
  let component: FindPropertiesComponent;
  let fixture: ComponentFixture<FindPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FindPropertiesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
