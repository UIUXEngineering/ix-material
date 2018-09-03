import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateValueTableComponent } from './date-value-table.component';

describe('DateValueTableComponent', () => {
  let component: DateValueTableComponent;
  let fixture: ComponentFixture<DateValueTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateValueTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateValueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
