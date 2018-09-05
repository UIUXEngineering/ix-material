import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output, ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { DateValueFormModelService } from '../model/date-value-form-model.service';
import { DateValueForm, DateValueFormLabels } from '../model/interfaces';
import { FORM_OPTIONS } from '@uiux/cdk/forms';
import { guid } from '@uiux/fn/guid';


@Component({
             selector: 'date-value-form',
             templateUrl: './date-value-form.component.html',
             styleUrls: ['./date-value-form.component.scss'],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class DateValueFormComponent implements OnInit, AfterViewInit, OnDestroy {

  private modelSub: Subscription = Subscription.EMPTY;

  appearance = FORM_OPTIONS.APPEARANCE.OUTLINE;
  floatLabel = FORM_OPTIONS.FLOAT_LABEL.ALWAYS;

  formLabels: DateValueFormLabels = {
    date: 'Date',
    value: 'Value',
  };

  formGroup: FormGroup;

  /**
   * User to reset form,
   * FormGroups have an issue resetting forms in that they only
   * reset the data, but not the state ( prisitine, untouched, etc ).
   */
  @ViewChild(FormGroupDirective) formRef: FormGroupDirective;

  @Input() modelID = 'default';
  @Input() init: DateValueForm;
  @Output() onsubmit: EventEmitter<DateValueForm> = new EventEmitter();

  constructor(public model: DateValueFormModelService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.buildFormGroup();
    this.formGroup
      .valueChanges
      .subscribe((r: DateValueForm) => {
        // stub
        // console.log(r);
      });
  }

  ngAfterViewInit(): void {
    if (this.init) {
      this.formGroup.setValue(this.init);
    }
  }

  onSubmitHandler(): void {
    // stub

    // submit directly to subject
    // this.model.value.next(this.addressForm.value);

    const payload: any = {
      date: this.formGroup.value.date.utc().valueOf(),
      value: this.formGroup.value.value,
      guid: guid(),
    };

    // console.log(this.formGroup.value.date.utc().valueOf());
    // console.log(moment.utc(payload.date).local().format())

    // or use method
    this.model.add(payload);

    this.reset();
  }

  getErrorMessage(controlName: string) {
    const control: AbstractControl = this.getControl(controlName);

    // order of priority
    if (control.hasError('required')) {
      return 'You must enter a value';
    } else if (control.hasError('date')) {
      return `Date required`;
    } else if (control.hasError('email')) {
      return `Invalid email`;
    } else {

      // should never get to here
      return 'Invalid value';
    }
  }

  getControl(controlName: string): AbstractControl {
    return this.formGroup.controls[controlName];
  }

  reset(): void {
    // from @ViewChild
    this.formRef.resetForm();
  }

  buildFormGroup(): FormGroup {

    // Keep validators in array even if there is only one
    // validator for scalability
    const group: any = {
      date: ['', [Validators.required]],
      value: ['', [Validators.required]],
    };

    return this.fb.group(group);
  }

  getResetValue(): DateValueForm {
    return {
      date: 0,
      value: '',
      guid: '',
    };
  }


  ngOnDestroy(): void {
    this.modelSub.unsubscribe();
  }
}
