import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  OnDestroy,
  Output,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { HighlightService } from '../../services/highlight-js/highlight.service';
import { Subscription } from 'rxjs';
import { DomPortalHost } from '@angular/cdk/portal';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  // tslint:disable-next-line
  selector: 'doc-viewer',
  template: '<pre><code class="{{extension}}">{{snippet}}</code></pre>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DocViewerComponent implements OnDestroy {
  private _portalHosts: DomPortalHost[] = [];
  private _documentFetchSubscription: Subscription;

  /** The URL of the document to display. */
  @Input()
  set documentUrl(url: string) {
    this._fetchDocument(url);
  }

  @Input('extension') public extension: string;

  @Output() contentLoaded = new EventEmitter<void>();

  /** The document text. It should not be HTML encoded. */
  textContent = '';

  snippet = '';

  constructor(
    private _appRef: ApplicationRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _elementRef: ElementRef,
    private _http: HttpClient,
    private _injector: Injector,
    private _viewContainerRef: ViewContainerRef,
    private _router: Router,
    private _cd: ChangeDetectorRef,
    private _hs: HighlightService
  ) {}

  /** Fetch a document by URL. */
  private _fetchDocument(url: string) {
    // Cancel previous pending request
    if (this._documentFetchSubscription) {
      this._documentFetchSubscription.unsubscribe();
    }

    this._documentFetchSubscription = this._http.get(url, { responseType: 'text' }).subscribe(
      (response) => {
        // TODO(mmalerba): Trust HTML.
        if (response) {
          this.snippet = response;

          this._hs.highlight(this._elementRef, this._cd);
        } else {
          this._elementRef.nativeElement.innerText = `Failed to load document: ${url}. Error: ${response}`;
        }
      },
      (error) => {
        this._elementRef.nativeElement.innerText = `Failed to load document: ${url}. Error: ${error}`;
      }
    );
  }

  // releadLiveExamples() {
  //   // When the example viewer is dynamically loaded inside of md-tabs, they somehow end up in
  //   // the wrong place in the DOM after switching tabs. This function is a workaround to
  //   // put the live examples back in the right place.
  //   this._clearLiveExamples();
  //   this._loadComponents('material-docs-example', ExampleViewer);
  //   this._loadComponents('header-link', HeaderLink);
  // }

  /** Instantiate a ExampleViewer for each example. */
  private _loadComponents(componentName: string, componentClass: any) {
    // let exampleElements =
    //     this._elementRef.nativeElement.querySelectorAll(`[${componentName}]`);
    //
    // Array.prototype.slice.call(exampleElements).forEach((element: Element) => {
    //   let example = element.getAttribute(componentName);
    //   let portalHost = new DomPortalHost(
    //       element, this._componentFactoryResolver, this._appRef, this._injector);
    //   let examplePortal = new ComponentPortal(componentClass, this._viewContainerRef);
    //   let exampleViewer = portalHost.attach(examplePortal);
    //   (exampleViewer.instance as ExampleViewer).example = example;
    //
    //   this._portalHosts.push(portalHost);
    // });
  }

  private _clearLiveExamples() {
    this._portalHosts.forEach((h) => h.dispose());
    this._portalHosts = [];
  }

  /**
   * A fragment link is a link that references a specific element on the page that should be
   * scrolled into the viewport on page load or click.
   *
   * By default those links refer to the root page of the documentation and the fragment links
   * won't work properly. Those links need to be updated to be relative to the current base URL.
   */
  private _fixFragmentUrls() {
    const baseUrl = this._router.url.split('#')[0];
    const anchorElements = [].slice.call(
      this._elementRef.nativeElement.querySelectorAll('a')
    ) as HTMLAnchorElement[];

    // Update hash links that are referring to the same page and host. Links that are referring
    // to a different destination shouldn't be updated. For example the Google Fonts URL.
    anchorElements
      .filter((anchorEl) => anchorEl.hash && anchorEl.host === location.host)
      .forEach((anchorEl) => (anchorEl.href = `${baseUrl}${anchorEl.hash}`));
  }

  ngOnDestroy() {
    this._clearLiveExamples();

    if (this._documentFetchSubscription) {
      this._documentFetchSubscription.unsubscribe();
    }
  }
}
