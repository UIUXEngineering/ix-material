import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FORM_OPTIONS } from '@uiux/fn/forms';

export interface PoCShadowDomBarForm {
  bars: string;
}

@Component({
             selector: 'poc-shadow-dom-bar-form',
             templateUrl: './poc-shadow-dom-bar-form.component.html',
             styleUrls: ['./poc-shadow-dom-bar-form.component.scss'],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class PocShadowDomBarFormComponent implements OnInit {
  barsForm: FormGroup;
  appearance = FORM_OPTIONS.APPEARANCE.OUTLINE;
  floatLabel = FORM_OPTIONS.FLOAT_LABEL.ALWAYS;
  @Input() init: PoCShadowDomBarForm;
  @Output() onsubmit: EventEmitter<PoCShadowDomBarForm> = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.barsForm = this.buildForm();
  }

  onSubmitHandler(): void {
    // stub
    // console.log(this.addressForm.value);
    this.onsubmit.next(this.barsForm.value);
  }


  buildForm(): FormGroup {
    return this.fb.group({
                           bars: ['1000', Validators.required],
                         });
  }

  getErrorMessage(controlName: string) {
    const control: AbstractControl = this.getControl(controlName);

    // order of priority
    if (control.hasError('required')) {
      return 'You must enter a value';
    } else {

      // should never get to here
      return 'Invalid value';
    }
  }

  getControl(controlName: string): AbstractControl {
    return this.barsForm.controls[controlName];
  }

  reset(): void {
    this.barsForm.reset(<PoCShadowDomBarForm>{
      bars: '1000'
    });
  }
}
