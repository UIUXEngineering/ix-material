import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { RouteService } from '../../../../services/route/route.service';
import { HeaderLinkComponent } from '../../../util-components/doc-viewer/header-link.component';
import { H2LinkComponent } from '../../h2/h2-link.component';
import { GuideTitleComponent } from '../guide-title/guide-title.component';

import { GuideViewerComponent } from './guide-viewer.component';

describe('GuideViewerComponent', () => {
  let component: GuideViewerComponent;
  let fixture: ComponentFixture<GuideViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        RouterTestingModule,
      ],
      declarations: [
        GuideViewerComponent,
        GuideTitleComponent,
        H2LinkComponent,
        HeaderLinkComponent,
      ],
      providers: [
        RouteService,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
