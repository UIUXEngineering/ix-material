import { ChangeDetectorRef, ElementRef, Injectable } from '@angular/core';
import { hasValue } from '@uiux/fn/common';

@Injectable({
  providedIn: 'root',
})
export class HighlightService {
  constructor() {
    /* noop */
  }

  highlight(elementRef: ElementRef, _cd: ChangeDetectorRef): void {
    _cd.detectChanges();

    if (window && window['hljs']) {
      const block: any = elementRef.nativeElement.querySelectorAll('pre code');

      if (hasValue(block)) {
        block.forEach((el) => {
          window['hljs'].highlightBlock(el);
        });
      }
    }
  }
}
