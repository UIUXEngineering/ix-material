import { ComponentFactoryResolver, ComponentRef, ElementRef, Injectable, Type } from '@angular/core';
import { IxBrowserService } from '@uiux/cdk/browser';
import { IxCmpHostDirective } from './ixCmpHost.directive';
import { IxComponentItem } from './ixComponentItem';

@Injectable({
              providedIn: 'root',
            })
export class IxDynamicComponentService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private ixBrowser: IxBrowserService) {
  }

  loadShadowDomComponent(host: IxCmpHostDirective,
                         shadowDomCmp: Type<any>,
                         defaultCmp: Type<any>,
                         data?: any): ComponentRef<any> {

    let cmp: IxComponentItem;

    if (this.ixBrowser.supportsShadowDom) {
      cmp = new IxComponentItem(shadowDomCmp, data);
    } else {
      cmp = new IxComponentItem(defaultCmp, data);
    }

    // Create Component FACTORY
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(cmp.component);

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
    if (this.ixBrowser.supportsShadowDom && this.hasShadowRoot(el)) {
      return el.nativeElement.shadowRoot;
    }

    return el.nativeElement;
  }

  hasShadowRoot(el: ElementRef): boolean {
    return el.nativeElement.hasOwnProperty('shadowRoot');
  }
}
