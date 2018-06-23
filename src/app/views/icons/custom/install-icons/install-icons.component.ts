import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'install-icons',
  templateUrl: './install-icons.component.html',
  styleUrls: ['./install-icons.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstallIconsComponent implements OnInit {
  data: IDataItem = ROUTES.icons.custom['install-svg-icons'];

  sampleConfig = `
  {
  "svg": {
    "tsReference": "src/environments/svgIconAssets.ts",
    "sets": [
      {
        "version": "v2",
        "outDir": "src/assets/svg",
        "setName": "icon-set",
        "srcFiles": {
          "projects/uiux/icons/custom": {
            "sp_logo-contained.svg": {
              "id": "logo"
            }
          },
          "projects/uiux/icons/custom/admin": {
            "sp-0735-meter.svg": {
              "id": "0735-meter"
            },
            "sp-ac-module.svg": {
              "id": "ac-module"
            },
            "sp-ac-module-blue-reversed.svg": {
              "id": "ac-module-blue-reversed"
            }
          }
        }
      }
    ]
  }
}
`;

  materialSvg = `
  import { MatIconRegistry } from '@angular/material';
  import { DomSanitizer } from '@angular/platform-browser';
  import { svgAssets } from '../../environments/svgIconAssets';

  @Component({
             selector: 'search-icons',
             templateUrl: './search-icons.component.html',
             styleUrls: [ './search-icons.component.scss' ],
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
   export class SearchIconsComponent  {

     constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer ) {

      iconRegistry.addSvgIconSetInNamespace(

        // HTML reference for svg map
        'iconList',

        // referene svgAssets.ICON_SET so you don't have to hard code path to assets.
        sanitizer.bypassSecurityTrustResourceUrl(svgAssets.ICON_SET));
    }
  }
  `;

  materialSvgHtml = `
  <mat-icon svgIcon="iconList:logo"></mat-icon>
  `;

  svgFileConfig = `
  "sp_logo-contained.svg": {
    "id": "logo"
  }
  `;

  @HostBinding('class.install-icons') public binding = true;

  constructor() {}

  ngOnInit() {}
}
