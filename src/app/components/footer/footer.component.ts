import { Component, NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { materialVersion } from '../../services/version/version';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  version = materialVersion;
}

@NgModule({
  imports: [MatIconModule],
  exports: [FooterComponent],
  declarations: [FooterComponent],
})
export class FooterModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'linkedin',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/homepage/1577-linkedin.svg')
    );
  }
}
