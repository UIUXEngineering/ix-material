import { ComponentFactoryResolver, ComponentRef, ElementRef, Injectable, Type } from '@angular/core';
import { IxBrowserService } from '../browser/ixBrowserService';
import { IxCmpHostDirective } from './ixCmpHost.directive';
import { IxComponentItem } from './ixComponentItem';

export function hasShadowRoot(el: ElementRef): boolean {
  return el.nativeElement.hasOwnProperty('shadowRoot');
}

@Injectable({
  providedIn: 'root',
})
export class IxDynamicComponentService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private ixBrowser: IxBrowserService) {}

  loadShadowDomComponent(
    host: IxCmpHostDirective,
    shadowDomCmp: Type<any>,
    defaultCmp: Type<any>,
    data?: any
  ): ComponentRef<any> {
    let cmp: IxComponentItem;

    if (this.ixBrowser.supportsShadowDom) {
      cmp = new IxComponentItem(shadowDomCmp, data);
    } else {
      cmp = new IxComponentItem(defaultCmp, data);
    }

    // Create Component FACTORY
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(cmp.component);

    // Get reference to host component container
    const viewContainerRef = host.viewContainerRef;

    // Clear old component
    viewContainerRef.clear();

    // Create Component in host reference
    const componentRef: ComponentRef<any> = viewContainerRef.createComponent(componentFactory);

    // Add Data
    if (data) {
      (<any>componentRef.instance).data = cmp.data;
    }

    return componentRef.instance;
  }

  getShadowRoot(el: ElementRef): ShadowRoot | HTMLElement {
    if (this.ixBrowser.supportsShadowDom && hasShadowRoot(el)) {
      return el.nativeElement.shadowRoot;
    }

    return el.nativeElement;
  }

  /**
   * For some reason all of Material's styles are included
   * in the ShadowDom. Remove all styles except what is included
   * in the stylesUrl meta-data.
   */
  removeExtraStyles(el: ElementRef, selector: string): void {
    if (this.ixBrowser.supportsShadowDom && hasShadowRoot(el)) {
      const styles: HTMLElement[] = el.nativeElement.shadowRoot.querySelectorAll('style') as HTMLElement[];

      if (styles && styles.length) {
        styles.forEach((r: HTMLElement) => {
          if (r.innerText.indexOf(selector) === -1) {
            el.nativeElement.shadowRoot.removeChild(r);
          }
        });
      }
    }
  }
}
