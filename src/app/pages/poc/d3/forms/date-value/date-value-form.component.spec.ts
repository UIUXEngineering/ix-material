import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateValueFormComponent } from './date-value.component';

describe('DateValueComponent', () => {
  let component: DateValueFormComponent;
  let fixture: ComponentFixture<DateValueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateValueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateValueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
