import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComponentPortal } from '@angular/cdk/portal';

import { CopierService } from '../../services/copier/copier.service';

@Component({
  selector: 'ts-file-viewer',
  templateUrl: './example-viewer-ts.component.html',
  styleUrls: ['./example-viewer-ts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ExampleViewerTsComponent implements AfterViewInit {
  /** Component portal for the currently displayed example. */
  selectedPortal: ComponentPortal<any>;

  /** String key of the currently displayed example. */
  _example: string;

  /** Whether the source for the example is being displayed. */
  showSource = false;

  constructor(private snackbar: MatSnackBar, private copier: CopierService) {}

  get example() {
    return this._example;
  }

  _url: string;

  @Input()
  set url(url: string) {
    this._url = url;
  }

  @Input('title') public title: string;

  ngAfterViewInit(): void {
    if (window && window['hljs']) {
      window['hljs'].initHighlightingOnLoad();
    }
  }

  toggleSourceView(): void {
    this.showSource = !this.showSource;
  }

  exampleFileUrl() {
    // return `/assets/examples/${this.example}-example-${extension.toLowerCase()}.html`;
    return `${this._url}`;
  }

  copySource(text: string) {
    if (this.copier.copyText(text)) {
      this.snackbar.open('Code copied', '', { duration: 2500 });
    } else {
      this.snackbar.open('Copy failed. Please try again!', '', { duration: 2500 });
    }
  }

  getExtension(extension: string): string {
    if (extension === 'TS') {
      return 'typescript';

      // } else if (extension === 'SCSS') {
      //
    } else {
      return extension.toLowerCase();
    }
  }
}
