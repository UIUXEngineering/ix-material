import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsContainsStringComponent } from './props-contains-string.component';

describe('PropsContainsStringComponent', () => {
  let component: PropsContainsStringComponent;
  let fixture: ComponentFixture<PropsContainsStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PropsContainsStringComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropsContainsStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
