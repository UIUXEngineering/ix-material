import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialComponent } from './angular-material.component';

describe('AngularMaterialComponent', () => {
  let component: AngularMaterialComponent;
  let fixture: ComponentFixture<AngularMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
