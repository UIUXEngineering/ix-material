import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeViewEncapsulationComponent } from './native-view-encapsulation.component';

describe('NativeViewEncapsulationComponent', () => {
  let component: NativeViewEncapsulationComponent;
  let fixture: ComponentFixture<NativeViewEncapsulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeViewEncapsulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeViewEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
