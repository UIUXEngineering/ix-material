import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDomViewEncapsulationComponent } from './shadow-dom-view-encapsulation.component';

describe('ShadowDomViewEncapsulationComponent', () => {
  let component: ShadowDomViewEncapsulationComponent;
  let fixture: ComponentFixture<ShadowDomViewEncapsulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowDomViewEncapsulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowDomViewEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
