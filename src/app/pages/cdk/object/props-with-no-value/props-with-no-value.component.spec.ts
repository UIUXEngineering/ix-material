import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsWithNoValueComponent } from './props-with-no-value.component';

describe('PropsWithNoValueComponent', () => {
  let component: PropsWithNoValueComponent;
  let fixture: ComponentFixture<PropsWithNoValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PropsWithNoValueComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropsWithNoValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
