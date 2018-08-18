/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Validators } from '@angular/forms';
import {
  AbstractFormFactory,
  FormBuilderFactoryService,
  IFormDefaultValueConfig,
  IFormErrorsConfig,
  IFormValidatorsConfig,
} from '@uiux/fn/forms';
import { forbiddenWhitespaceValidator } from '@uiux/fn/validators';

export class SpSearchAutoComplateFormGroup extends AbstractFormFactory {
  // tslint:disable
  constructor(private formBuilderFactory: FormBuilderFactoryService, private _action?: Function) {
    super(formBuilderFactory, _action);
  }
  // tslint:enable

  defaultValueConfig(): IFormDefaultValueConfig {
    return {
      search: '',
    };
  }

  validatorsConfig(): IFormValidatorsConfig {
    return {
      search: [forbiddenWhitespaceValidator(), Validators.minLength(3)],
    };
  }

  errorsMessagesConfig(): IFormErrorsConfig {
    return {
      search: {
        minlength: 'Minimum of three characters.',
        forbiddenWhitespace: 'No leading or trailing whitespace.',
      },
    };
  }

  onChange(): void {
    /* noop */
  }
}

@Injectable()
export class SpSearchAutoComplateFormGroupFactory {
  constructor(private fp: FormBuilderFactoryService) {
    /* noop */
  }

  create(action?: Function): SpSearchAutoComplateFormGroup {
    return new SpSearchAutoComplateFormGroup(this.fp, action);
  }
}

// tslint:disable
export function _searchFormGroupFactory(
  parentDispatcher: SpSearchAutoComplateFormGroupFactory,
  fp: FormBuilderFactoryService
): SpSearchAutoComplateFormGroupFactory {
  return parentDispatcher || new SpSearchAutoComplateFormGroupFactory(fp);
}

export const SP_SEARCH_AUTOCOMPLETE_FORMGROUP_PROVIDER: any = {
  provide: SpSearchAutoComplateFormGroupFactory,
  deps: [
    [new Optional(), new SkipSelf(), SpSearchAutoComplateFormGroupFactory],
    FormBuilderFactoryService,
  ],
  useFactory: _searchFormGroupFactory,
};
// tslint:enable
