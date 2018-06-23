import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewViewerComponent } from './overview-viewer.component';

describe('OverviewViewerComponent', () => {
  let component: OverviewViewerComponent;
  let fixture: ComponentFixture<OverviewViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewViewerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
