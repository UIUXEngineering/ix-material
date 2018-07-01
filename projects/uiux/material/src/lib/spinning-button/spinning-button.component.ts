/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ix-spinning-button',
  templateUrl: './spinning-button.component.html',
  styleUrls: ['./spinning-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpSpinningButtonComponent {
  @Input() text: string;

  @Input() backgroundColor: string;
}
