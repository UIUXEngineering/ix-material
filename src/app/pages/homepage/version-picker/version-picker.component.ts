import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { VersionInfo, docVersions, materialVersion } from '../../../services/version/version';

@Component({
  selector: 'app-version-picker',
  templateUrl: './version-picker.component.html',
})
export class VersionPickerComponent {
  _versionRegex = /\d+.\d+.\d+/;
  docVersions = docVersions;

  materialVersion = materialVersion;

  displayVersion = materialVersion.match(this._versionRegex)[0];

  onVersionChanged(version: VersionInfo) {
    if (version.title.match(this._versionRegex)[0] !== this.displayVersion) {
      window.location.assign(version.url);
    }
  }
}

@NgModule({
  imports: [MatButtonModule, MatMenuModule, CommonModule],
  exports: [VersionPickerComponent],
  declarations: [VersionPickerComponent],
})
export class VersionPickerModule {}
