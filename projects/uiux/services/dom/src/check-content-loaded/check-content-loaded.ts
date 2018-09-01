import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { IPollForValueConfig, pollForValueWithConfig } from '@uiux/rxjs/pipes';

export interface Content {
  isLoaded: boolean;
  childNodes: any[];
}

export interface CheckContentConfig {
  limit: number;
  interval: number;
  timeout: number;
}

const initialCheckContentConfig: CheckContentConfig = {
  limit: 20,
  interval: 100,
  timeout: 2000,
};

export class CheckContentLoaded {
  private _numberLoaded = 0;
  private _containers: any;

  contentLoaded: BehaviorSubject<Content> = new BehaviorSubject<Content>({
    isLoaded: false,
    childNodes: [],
  });

  childNodes: any[] = [];

  constructor(
    private _document: Document,
    private _containerQuerySelector: string,
    private _config?: CheckContentConfig
  ) {
    this._config = _config ? _config : initialCheckContentConfig;
  }

  /**
   * Every time this method is called, a new poller
   * is spawned to poll for content ( children ) in a given dom element.
   */
  checkedContentLoaded(): Observable<Content> {
    // const that = this;
    //
    return new Observable((observer: Observer<any>) => {
      const config: IPollForValueConfig = {
        delay: 500,
        interval: 500,
        timeout: 2000,

        // Observable to repetitively query
        sourceObservable: () => this._queryDom(),

        // function that evaluates success criteria
        compare: (r: Content) => r.isLoaded,
      };

      this._queryDom()
        .pipe(pollForValueWithConfig(config))
        .subscribe((r: Content) => {
          observer.next(r);
          observer.complete();
        });
    });
  }

  setContainerSelector(selector: string): void {
    this._containerQuerySelector = selector;
  }

  unload(): void {
    this.childNodes = [];
    this.contentLoaded.next({
      isLoaded: false,
      childNodes: this.childNodes,
    });
  }

  reset(): void {
    this._numberLoaded = 0;
    this.childNodes = [];
  }

  destroy(): void {
    this.childNodes = null;
    this.childNodes = [];
    this.contentLoaded.complete();
  }

  private _queryDom(): Observable<any> {
    return new Observable((observer: Observer<Content>) => {
      this._containers = this._document.querySelectorAll(this._containerQuerySelector);

      if (this._containers && this._containers.length && this._containers[0].childNodes.length) {
        let result: Content = {
          isLoaded: false,
          childNodes: [],
        };

        // Check the number of children loaded previously vs the number of childNodes found
        if (this._numberLoaded !== this._containers[0].childNodes.length) {
          this._numberLoaded = this._containers[0].childNodes.length;

          // this._checkCount = 0;
        } else {
          this.childNodes = this._containers[0].childNodes;

          result = {
            isLoaded: true,
            childNodes: this._containers[0].childNodes,
          };
        }

        observer.next(result);

        observer.complete();
      }
    });
  }
}
