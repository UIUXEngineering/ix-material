import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { IDataItem } from '../../../../models/routes';
import { IRouteService, RouteService } from '../../../services/route/route.service';

interface Link {
  /* id of the section*/
  id: string;

  /* header type h3/h4 */
  type: string;

  /* If the anchor is in view of the page */
  active: boolean;

  /* name of the anchor */
  name: string;

  /* top offset px of the anchor */
  top: number;
}

@Component({
             selector: 'table-of-contents',
             styleUrls: [ './table-of-contents.scss' ],
             templateUrl: './table-of-contents.html',
             preserveWhitespaces: false,
             // encapsulation: ViewEncapsulation.None,
             // changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class TableOfContents implements OnInit, OnDestroy {
  private _selectedFromToc = false;

  @Input() links: Link[] = [];
  @Input() contentContainer: string;
  @Input() headerSelectors = '.docs-markdown-h3,.docs-markdown-h4';
  @Input('data') data: IDataItem;
  @Output() contentLoaded = new EventEmitter<void>();
  @Input('loaderId') loaderId: string;
  @Input('scrollContainer') scrollContainer = 'scroll-container';

  _rootUrl = '';
  private _scrollContainer: any;
  private _destroyed = new Subject();
  private _urlFragment = '';

  constructor(
    private _router: RouteService,
    private _route: ActivatedRoute,
    private _element: ElementRef,
    private _cd: ChangeDetectorRef,
    @Inject(DOCUMENT) private _document: Document,
  ) {
    this._router.value.pipe(takeUntil(this._destroyed)).subscribe(( event: IRouteService ) => {
      const rootUrl = event.url.split('#')[ 0 ];

      if ( rootUrl !== this._rootUrl ) {
        this._rootUrl = rootUrl;

        this.links = this.createLinks();

        this.setHeaderActive();

        this._cd.markForCheck();
      }
    });

    this._route.fragment.pipe(takeUntil(this._destroyed)).subscribe(( fragment ) => {
      this._urlFragment = fragment;

      const target = document.getElementById(this._urlFragment);
      if ( target ) {
        target.scrollIntoView();
      }
    });
  }

  ngOnInit(): void {
    // On init, the sidenav content element doesn't yet exist, so it's not possible
    // to subscribe to its scroll event until next tick (when it does exist).
    Promise.resolve().then(() => {
      if ( this.scrollContainer ) {
        this._scrollContainer = this.scrollContainer
          ? this._document.querySelectorAll(this.scrollContainer)[ 0 ]
          : window;

        if ( this._scrollContainer ) {
          fromEvent(this._scrollContainer, 'scroll')
            .pipe(takeUntil(this._destroyed), debounceTime(10))
            .subscribe(() => this.onScroll());
        }
      }
    });
  }

  ngOnDestroy(): void {
    this._destroyed.next();
  }

  setHeaderActive(): void {
    if ( this.links.length ) {
      const active: Link[] = this.links.filter(( i: Link ) => i.active);

      if ( active && !active.length ) {
        if ( this.links[ 0 ] ) {
          this.links[ 0 ].active = true;
        }

        this._cd.detectChanges();
      }
    }
  }

  updateScrollPosition(): void {
    this.links = this.createLinks();
    this.setHeaderActive();

    const target = document.getElementById(this._urlFragment);
    if ( target ) {
      target.scrollIntoView();
    }
  }

  /** Gets the scroll offset of the scroll container */
  private getScrollOffset(): number {
    const { top } = this._element.nativeElement.getBoundingClientRect();
    if ( typeof this._scrollContainer.scrollTop !== 'undefined' ) {
      return this._scrollContainer.scrollTop + top;
    } else if ( typeof this._scrollContainer.pageYOffset !== 'undefined' ) {
      return this._scrollContainer.pageYOffset + top;
    }
  }

  private createLinks(): Link[] {
    const links = [];
    let _container: any;

    if ( this.contentContainer ) {
      _container = this._document.querySelectorAll(this.contentContainer)[ 0 ];
    }

    _container = _container ? _container : document;

    const headers = Array.from(_container.querySelectorAll(this.headerSelectors)) as HTMLElement[];

    if ( headers.length ) {
      for ( const header of headers ) {
        // remove the 'link' icon name from the inner text
        const name = header.innerText.trim().replace(/^link/, '');
        const { top } = header.getBoundingClientRect();
        const headerTagName: string = header.tagName.toLowerCase();

        links.push({
                     name: headerTagName === 'h2' ? this.data.name : name,
                     type: headerTagName,
                     top: top,
                     id: header.id,
                     active: false,
                   });
      }
    }

    return links;
  }

  private onScroll(): void {
    if ( !this._selectedFromToc ) {
      for ( let i = 0; i < this.links.length; i++ ) {
        this.links[ i ].active = this.isLinkActive(this.links[ i ], this.links[ i + 1 ]);
      }
      this._cd.detectChanges();
    }
  }

  private isLinkActive( currentLink: any, nextLink: any ): boolean {
    // A link is considered active if the page is scrolled passed the anchor without also
    // being scrolled passed the next link
    const scrollOffset = this.getScrollOffset();
    return scrollOffset >= currentLink.top && !(nextLink && nextLink.top < scrollOffset);
  }

  onSelectLink( _selectedLink: Link ): void {
    this._selectedFromToc = true;
    setTimeout(() => {
      for ( let i = 0; i < this.links.length; i++ ) {
        this.links[ i ].active = this.links[ i ].id === _selectedLink.id;
      }

      // this._cd.detectChanges();

      this._selectedFromToc = false;
    }, 100);
  }
}
