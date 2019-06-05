import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ComponentPageTitle } from '../../../services/page-title/page-title';

@Component({
  selector: 'app-component-page-header',
  templateUrl: './component-page-header.html',
  styleUrls: ['./component-page-header.scss'],
})
export class ComponentPageHeaderComponent {
  constructor(public _componentPageTitle: ComponentPageTitle) {}

  @Output() toggleSidenav = new EventEmitter<void>();

  getTitle() {
    return this._componentPageTitle.title;
  }
}

@NgModule({
  imports: [MatButtonModule, MatIconModule],
  exports: [ComponentPageHeaderComponent],
  declarations: [ComponentPageHeaderComponent],
  providers: [ComponentPageTitle],
})
export class ComponentHeaderModule {}
