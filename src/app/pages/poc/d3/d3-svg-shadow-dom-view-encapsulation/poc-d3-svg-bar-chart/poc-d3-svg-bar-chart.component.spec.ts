import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocD3SvgBarChartComponent } from './poc-d3-svg-bar-chart.component';

describe('PocD3SvgBarChartComponent', () => {
  let component: PocD3SvgBarChartComponent;
  let fixture: ComponentFixture<PocD3SvgBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocD3SvgBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocD3SvgBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
