import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiRefService } from '../../../services/api-ref/api-ref.service';
import { RouteService } from '../../../services/route/route.service';
import { HeaderLinkComponent } from '../../util-components/doc-viewer/header-link.component';
import { GithubSpecComponent } from '../../util-components/github-spec/github-spec.component';
import { SeeAlsoItemsComponent } from '../../util-components/see-also-items/see-also-items.component';
import { TableOfContents } from '../../util-components/table-of-contents/table-of-contents';
import { VersionComponent } from '../../util-components/version/version.component';
import { H4LinkComponent } from '../h4/h4-link.component';
import { H4TitleComponent } from '../h4/h4-title.component';

import { OverviewContainerComponent } from './overview-container.component';
import { OverviewViewerComponent } from './overview-viewer/overview-viewer.component';

describe('OverviewContainerComponent', () => {
  let component: OverviewContainerComponent;
  let fixture: ComponentFixture<OverviewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LayoutModule,
        RouterTestingModule,
        MatIconModule,

      ],
      declarations: [
        OverviewContainerComponent,
        OverviewViewerComponent,
        GithubSpecComponent,
        SeeAlsoItemsComponent,
        VersionComponent,
        TableOfContents,
        H4LinkComponent,
        H4TitleComponent,
        HeaderLinkComponent,

      ],
      providers: [
        ApiRefService,
        RouteService,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
