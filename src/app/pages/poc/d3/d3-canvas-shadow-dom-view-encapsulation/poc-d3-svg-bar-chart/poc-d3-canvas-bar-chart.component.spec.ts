import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocD3CanvasBarChartComponent } from './poc-d3-canvas-bar-chart.component';

describe('PocD3CanvasBarChartComponent', () => {
  let component: PocD3CanvasBarChartComponent;
  let fixture: ComponentFixture<PocD3CanvasBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocD3CanvasBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocD3CanvasBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
