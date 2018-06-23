import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { svgAssets } from '../../../../../environments/svgIconAssets';

@Component({
  selector: 'search-icons',
  templateUrl: './search-icons.component.html',
  styleUrls: ['./search-icons.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchIconsComponent implements OnInit {
  /**
   * Add "id" of icon to list
   * from `.sp-cli.json`.
   * @type {string[]}
   * @private
   */
  private _iconIds: string[] = [
    // '0735-meter',
    'ac-module',
    'ac-module-blue-reversed',
    'ac-module-reversed',
    'bind',
    'commission',
    'decommission',
    'delete',
    'discover',
    'get-device-list',
    'ground-fault-monitor',
    'ground-fault-monitor-blue-reversed',
    'ground-fault-monitor-reversed',
    // '3d-rotation',
    'close',
    'dashboard',
    'inverter',
    'inverter-reversed-blue',
    'inverter-reversed',
    'log',
    'mail',
    'met-station',
    'met-station-calibrate',
    'met-station-reversed-blue',
    'met-station-reversed',
    'meter',
    'meter-blue-reversed',
    'meter-reversed',
    'network-interface',
    'power',
    'pvs',
    'pvs-blue-reversed',
    'pvs-reversed',
    'reboot',
    'refresh',
    'remove',
    'set-params',
    'science',
    'share',
    'ssh',
    'unbind',
    'unshare',
    'update-firmware',
    'wifi',
  ];

  /**
   * Creates name and icon namespace
   * for view
   * @type {{icon: string; name: string}[]}
   */
  icons: any[] = this._iconIds.sort().map((i: string) => {
    return {
      icon: i,
      name: i.replace(/-/g, ' '),
    };
  });

  @HostBinding('class.search-icons') public bind = true;

  searchFormGroup: FormGroup;
  searchSub: Subscription = Subscription.EMPTY;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSetInNamespace(
      'iconList',
      sanitizer.bypassSecurityTrustResourceUrl(svgAssets.ICON_SET)
    );
  }

  ngOnInit(): void {
    this.allIcons();
    this.searchFormGroup = this.buildFormGroup();
    this.searchSub = this.searchFormGroup.valueChanges.subscribe((r: any) => {
      this.filterIcons(r.search);
    });
  }

  allIcons(): void {
    this.icons = this._iconIds.sort().map((i: string) => {
      return {
        icon: i,
        name: i.replace(/-/g, ' '),
      };
    });
  }

  filterIcons(str: string): void {
    this.icons = this._iconIds
      .sort()
      .filter((i: string) => {
        return i.indexOf(str) > -1;
      })
      .map((i: string) => {
        return {
          icon: i,
          name: i.replace(/-/g, ' '),
        };
      });
  }

  buildFormGroup(): FormGroup {
    const group: any = {
      search: new FormControl('', []),
    };

    return new FormGroup(group);
  }
}
