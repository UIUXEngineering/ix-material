import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsHaveValueComponent } from './props-have-value.component';

describe('PropsHaveValueComponent', () => {
  let component: PropsHaveValueComponent;
  let fixture: ComponentFixture<PropsHaveValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PropsHaveValueComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropsHaveValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
