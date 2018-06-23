import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabApiComponent } from './tab-api.component';

describe('TabApiComponent', () => {
  let component: TabApiComponent;
  let fixture: ComponentFixture<TabApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabApiComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
