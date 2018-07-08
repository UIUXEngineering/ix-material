import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalComponent } from './dal.component';

describe('DalComponent', () => {
  let component: DalComponent;
  let fixture: ComponentFixture<DalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
