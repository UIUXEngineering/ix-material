import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ComponentPortal } from '@angular/cdk/portal';

import { CopierService } from '../../../services/copier/copier.service';

@Component({
  selector: 'example-demo-viewer',
  templateUrl: './example-demo-viewer.component.html',
  styleUrls: ['./example-demo-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ExampleDemoViewerComponent implements AfterViewInit {
  /** Component portal for the currently displayed example. */
  selectedPortal: ComponentPortal<any>;

  /** String key of the currently displayed example. */
  _file: string;

  /** Whether the source for the example is being displayed. */
  showSource = false;

  constructor(private snackbar: MatSnackBar, private copier: CopierService) {}

  get file() {
    return this._file;
  }

  _baseUrl: string;

  @Input()
  set file(example: string) {
    this._file = example;
  }

  @Input()
  set baseUrl(url: string) {
    this._baseUrl = url;
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

  exampleFileUrl(extension: string) {
    // return `/assets/examples/${this.example}-example-${extension.toLowerCase()}.html`;
    return `/${this._baseUrl}/${this.file}.${extension.toLowerCase()}`;
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
