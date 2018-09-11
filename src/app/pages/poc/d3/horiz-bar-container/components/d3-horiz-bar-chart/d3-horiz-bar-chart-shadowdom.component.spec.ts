import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3HorizBarChartComponent } from './d3-horiz-bar-chart.component';

describe('D3HorizBarChartComponent', () => {
  let component: D3HorizBarChartComponent;
  let fixture: ComponentFixture<D3HorizBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3HorizBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3HorizBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
