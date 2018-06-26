import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsDefinedInComponent } from './is-defined-in.component';

describe('IsDefinedInComponent', () => {
  let component: IsDefinedInComponent;
  let fixture: ComponentFixture<IsDefinedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsDefinedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsDefinedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
