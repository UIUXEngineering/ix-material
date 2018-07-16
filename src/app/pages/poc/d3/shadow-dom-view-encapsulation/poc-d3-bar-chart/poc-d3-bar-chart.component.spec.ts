import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocD3BarChartComponent } from './poc-d3-bar-chart.component';

describe('PocD3BarChartComponent', () => {
  let component: PocD3BarChartComponent;
  let fixture: ComponentFixture<PocD3BarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocD3BarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocD3BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
