import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { THEME_PICKER_THEMES } from '../../../../configs/constants';
import { StyleManager } from '../../../services/style-manager';
import { DocsSiteTheme, ThemeStorage } from './theme-storage/theme-storage';

@Component({
  selector: 'app-theme-picker',
  templateUrl: 'theme-picker.component.html',
  styleUrls: ['theme-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ThemePickerComponent {
  currentTheme;

  themes = THEME_PICKER_THEMES;

  // @HostBinding('aria-hidden') ariaBinding: boolean = true;

  constructor(public styleManager: StyleManager, private _themeStorage: ThemeStorage) {
    const currentTheme = this._themeStorage.getStoredTheme();
    if (currentTheme) {
      this.installTheme(currentTheme);
    }
  }

  installTheme(theme: DocsSiteTheme) {
    this.currentTheme = this._getCurrentThemeFromHref(theme.href);

    if (theme.isDefault) {
      this.styleManager.removeStyle('theme');
    } else {
      this.styleManager.setStyle('theme', `assets/${theme.href}`);
    }

    if (this.currentTheme) {
      this._themeStorage.storeTheme(this.currentTheme);
    }
  }

  private _getCurrentThemeFromHref(href: string): DocsSiteTheme {
    return this.themes.find((theme) => theme.href === href);
  }
}

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatTooltipModule,
    CommonModule,
  ],
  exports: [ThemePickerComponent],
  declarations: [ThemePickerComponent],
  providers: [StyleManager, ThemeStorage],
})
export class ThemePickerModule {}
