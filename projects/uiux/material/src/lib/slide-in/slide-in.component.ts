/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { ISPSlideInConfig } from './slide-in-config.interface';

@Component({
  selector: 'sp-slide-in',
  templateUrl: './slide-in.component.html',
  styleUrls: ['./slide-in.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SPSlideInComponent {
  // iconName: string = 'keyboard_arrow_up';
  // bodyContainerHeight = '0px';
  private opened = false;

  options: any = {
    iconName: 'keyboard_arrow_up',
    bodyContainerHeight: '0px',
  };

  @Input('config') config: ISPSlideInConfig;

  @HostBinding('class.sp-slide-in') public bindStyle = true;

  constructor(private el: ElementRef, private changeDetector: ChangeDetectorRef) {}

  getContentHeight(): string {
    return this.el.nativeElement.querySelector('.sp-slide-in-body').clientHeight + 'px';
  }

  expand(): void {
    this.opened = true;
    this.options.iconName = 'keyboard_arrow_down';
    this.options.bodyContainerHeight = this.getContentHeight();
    this.changeDetector.markForCheck();
  }

  collapse(): void {
    this.opened = false;
    this.options.iconName = 'keyboard_arrow_up';
    this.options.bodyContainerHeight = '0px';
    this.changeDetector.markForCheck();
  }

  toggle(): void {
    if (this.opened) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  raise(): void {
    this.el.nativeElement.style.bottom = '0px';
  }

  descent(): void {
    this.el.nativeElement.style.bottom = '-60px';
  }
}
