import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IxShowModule } from '@uiux/material';

import { TabGroupComponent } from './tab-group.component';

describe('TabGroupComponent', () => {
  let component: TabGroupComponent;
  let fixture: ComponentFixture<TabGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IxShowModule],
      declarations: [TabGroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
