import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { IxShowModule } from '@uiux/material';
import { ApiRefService } from '../../../services/api-ref/api-ref.service';
import { RouteService } from '../../../services/route/route.service';

import { TabGroupComponent } from './tab-group.component';

describe('TabGroupComponent', () => {
  let component: TabGroupComponent;
  let fixture: ComponentFixture<TabGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, IxShowModule, MatTabsModule, RouterTestingModule],
      declarations: [TabGroupComponent],
      providers: [ApiRefService, RouteService]
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
