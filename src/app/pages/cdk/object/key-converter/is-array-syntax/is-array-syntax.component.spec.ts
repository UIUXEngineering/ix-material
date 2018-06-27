import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsArraySyntaxComponent } from './is-array-syntax.component';

describe('IsArraySyntaxComponent', () => {
  let component: IsArraySyntaxComponent;
  let fixture: ComponentFixture<IsArraySyntaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsArraySyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsArraySyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
