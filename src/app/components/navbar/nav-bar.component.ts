import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgModule, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule, MatIconModule, MatIconRegistry, MatMenuModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CDK, COMPONENTS, GIT_REPO, GUIDES, ICONS, POC, PROJECTS, sectionOrder, THEMES } from '../../../configs/constants';
import { ThemePickerModule } from '../../pages/homepage/theme-picker/theme-picker.component';
import { VersionPickerModule } from '../../pages/homepage/version-picker/index';
import { VersionService } from '../../services/version/version';

@Component({
             selector: 'app-navbar',
             templateUrl: './nav-bar.component.html',
             styleUrls: [ './nav-bar.component.scss' ],
             changeDetection: ChangeDetectionStrategy.OnPush,
             encapsulation: ViewEncapsulation.None,
           })
export class NavBarComponent implements OnInit, OnDestroy {
  private _versionSub: Subscription = Subscription.EMPTY;
  gitRepoBase = GIT_REPO;
  version: string;

  get sections() {
    return PROJECTS;
  }

  get sectionKeys() {
    return sectionOrder.reduce(( acc: any, i: any ) => {
      const nav: any = {
        name: i,
      };

      switch ( i ) {
        case CDK:
          nav.route = `${i}/guides/cdk-overview`;
          break;
        case COMPONENTS:
          nav.route = `${i}/guides/mat-overview`;
          break;
        case GUIDES:
          nav.route = `${i}/getting-started/install`;
          break;
        case ICONS:
          nav.route = `${i}/custom/search`;
          break;
        case POC:
          nav.route = `${i}/guides/poc-overview`;
          break;
        case THEMES:
          nav.route = `${i}/demos/overview`;
          break;
        default:
      }

      acc.push(nav);
      return acc;
    }, []);
  }

  constructor( iconRegistry: MatIconRegistry,
               sanitizer: DomSanitizer,
               public vs: VersionService,
               private cd: ChangeDetectorRef ) {
    iconRegistry.addSvgIcon(
      'uiux-logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/uiux-logo.svg'));
  }

  ngOnInit(): void {
    this._versionSub = this.vs.value.subscribe(( { version } ) => {
      this.version = version;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this._versionSub.unsubscribe();
  }
}

@NgModule({
            imports: [
              CommonModule,
              MatButtonModule,
              MatMenuModule,
              ThemePickerModule,
              VersionPickerModule,
              MatIconModule,
              RouterModule,
            ],
            exports: [ NavBarComponent ],
            declarations: [ NavBarComponent ],
          })
export class NavBarModule {
  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer ) {
    iconRegistry.addSvgIcon(
      'sp-logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/sp-logo.svg'),
    );
  }
}
