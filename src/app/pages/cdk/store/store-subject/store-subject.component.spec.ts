import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSubjectComponent } from './store-subject.component';

describe('StoreSubjectComponent', () => {
  let component: StoreSubjectComponent;
  let fixture: ComponentFixture<StoreSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
