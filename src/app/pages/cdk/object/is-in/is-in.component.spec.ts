import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsInComponent } from './is-in.component';

describe('IsInComponent', () => {
  let component: IsInComponent;
  let fixture: ComponentFixture<IsInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
