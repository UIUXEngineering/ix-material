/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { IFormValue, INITIAL_FORM_VALUE } from '@uiux/cdk/forms';
import { forbiddenWhitespaceValidator } from '@uiux/cdk/validators';
import { default as _isString } from 'lodash-es/isString';
import { Subscription } from 'rxjs/Subscription';
import {
  SpSearchAutoComplateFormGroup,
  SpSearchAutoComplateFormGroupFactory,
} from './search-autocomplete-form-group.service';

export interface ISpinnerConfig {
  diameter?: number;
  strokeWidth?: number;
}

@Component({
  selector: 'ix-search-autocomplete',
  templateUrl: './search-autocomplete.component.html',
  styleUrls: ['./search-autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpSearchAutoCompleteComponent implements AfterViewInit {
  private _formSub: Subscription = Subscription.EMPTY;
  private _timer: any;
  private _currentSearchValue = '';
  private _optionIsSelecting = false;
  private _controller: AbstractControl;

  formGroup: FormGroup;
  formGroupService: SpSearchAutoComplateFormGroup;
  formValue: IFormValue = INITIAL_FORM_VALUE;
  inputBlur = true;

  @Input()
  set control(val: AbstractControl) {
    this._controller = val;
  }

  @HostBinding('class.search-autocomplete-component') public bindStyle = true;

  get control(): AbstractControl {
    if (!this._controller) {
      this.formGroupService = this._formGroupFactory.create();
      this.formGroup = this.formGroupService.form;
      this._controller = this.formGroup.controls['search'];

      if (this.minLength !== 3) {
        // tslint:disable-next-line:no-string-literal
        this.formGroup.controls['search'].setValidators([
          forbiddenWhitespaceValidator(),
          Validators.minLength(this.minLength),
        ]);
      }
    }

    return this._controller;
  }

  @Input('placeholder') placeholder = '';

  @Input('autoCompleteData') autoCompleteData: any = [];

  /**
   * Options
   * textOnly, iconText
   */
  @Input('optionTemplate') optionTemplate = 'textOnly';

  @Input('delay') delay = 300;

  @Input('minLength') minLength = 3;

  @Input('iconLeft') iconLeft = false;

  @Input('isSearching') isSearching = false;

  @Input('displayWith') displayWith: Function;

  @Input('optionFormatter') optionFormatter: Function;

  @Input('disableSubmit') disableSubmit = false;

  @Input('overrideMaterial') overrideMaterial = true;

  @Input('spinnerConfig')
  spinnerConfig: ISpinnerConfig = {
    diameter: 14,
    strokeWidth: 1,
  };

  /**
   * String emitted from input value changes.
   * Always a string value.
   */
  @Output() valueChanges: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Object or String emitted from autocomplete option select.
   * Always a string value.
   */
  @Output() optionSelected: EventEmitter<string | object> = new EventEmitter<string | object>();

  /**
   * Object or String emitted from keyboard 'Enter' event
   * or click event on search icon.
   */
  @Output() submit: EventEmitter<string | object> = new EventEmitter<string | object>();

  /**
   * Aggregation of optionSelected, onSubmit, and valueChanges events.
   * ( You receive all events )
   */
  @Output() changes: EventEmitter<string | object> = new EventEmitter<string | object>();

  constructor(
    private _changeDetector: ChangeDetectorRef,
    private _formGroupFactory: SpSearchAutoComplateFormGroupFactory
  ) {}

  ngAfterViewInit(): void {
    /**
     * valueChanges handler
     */
    this._formSub = this.control.valueChanges.subscribe((val: string | object) => {
      if (_isString(val) && this._currentSearchValue !== val.trim()) {
        this._currentSearchValue = val.trim();
        if (this._timer) {
          clearTimeout(this._timer);
        }

        this._timer = setTimeout(() => {
          if (!this._optionIsSelecting) {
            this.valueChanges.emit(this._currentSearchValue);
            this.onChange(this._currentSearchValue);
          } else {
            this._optionIsSelecting = false;
          }
        }, this.delay);
      }
    });
  }

  /**
   * onSubmit handler
   */
  onSubmitHandler(): void {
    if (!this.disableSubmit && this._controller.valid && !this._controller.pristine) {
      this.submit.emit(this._currentSearchValue);
      this.onChange(this._currentSearchValue);
    }
  }

  /**
   * optionSelected handler
   */
  onOptionSelected(e: MatAutocompleteSelectedEvent): void {
    this.isSearching = false;
    this._optionIsSelecting = true;
    if (this._currentSearchValue !== e.option.value) {
      this._currentSearchValue = e.option.value;
      this.optionSelected.emit(this._currentSearchValue);
      this.onChange(this._currentSearchValue);
    }
  }

  detectChanges(): void {
    this._changeDetector.detectChanges();
  }

  onChange(val: string | object): void {
    this.changes.emit(val);
  }

  /**
   * if optionValueMap is provided, return
   * the value mapped in option, else, return
   * the option itself.
   *
   * @param option
   * @returns string
   */
  formatOptionText(option: any): string {
    if (this.optionFormatter) {
      return this.optionFormatter(option);
    } else {
      return option;
    }
  }
}
