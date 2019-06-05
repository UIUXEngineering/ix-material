import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiRefService } from '../../../../services/api-ref/api-ref.service';
import { RouteService } from '../../../../services/route/route.service';
import { HeaderLinkComponent } from '../../../util-components/doc-viewer/header-link.component';
import { GithubSpecComponent } from '../../../util-components/github-spec/github-spec.component';
import { SeeAlsoItemsComponent } from '../../../util-components/see-also-items/see-also-items.component';
import { VersionComponent } from '../../../util-components/version/version.component';
import { H4LinkComponent } from '../../h4/h4-link.component';
import { H4TitleComponent } from '../../h4/h4-title.component';

import { OverviewViewerComponent } from './overview-viewer.component';

describe('OverviewViewerComponent', () => {
  let component: OverviewViewerComponent;
  let fixture: ComponentFixture<OverviewViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        RouterTestingModule,
      ],
      declarations: [
        OverviewViewerComponent,
        GithubSpecComponent,
        H4LinkComponent,
        HeaderLinkComponent,
        SeeAlsoItemsComponent,
        H4TitleComponent,
        VersionComponent,
      ],
      providers: [
        RouteService,
        ApiRefService,
      ]
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
