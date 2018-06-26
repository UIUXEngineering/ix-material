import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsDefinedComponent } from './is-defined.component';

describe('IsDefinedComponent', () => {
  let component: IsDefinedComponent;
  let fixture: ComponentFixture<IsDefinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsDefinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsDefinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
