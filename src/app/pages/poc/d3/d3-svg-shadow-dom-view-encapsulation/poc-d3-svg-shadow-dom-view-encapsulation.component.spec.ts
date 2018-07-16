import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocD3SvgShadowDomViewEncapsulationComponent } from './poc-d3-svg-shadow-dom-view-encapsulation.component';

describe('PocD3SvgShadowDomViewEncapsulationComponent', () => {
  let component: PocD3SvgShadowDomViewEncapsulationComponent;
  let fixture: ComponentFixture<PocD3SvgShadowDomViewEncapsulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocD3SvgShadowDomViewEncapsulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocD3SvgShadowDomViewEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
