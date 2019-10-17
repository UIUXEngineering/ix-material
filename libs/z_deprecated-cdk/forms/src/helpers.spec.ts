/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import {
  buildConfig,
  buildControls,
  buildDefaultResponse,
  buildResponseTree,
  buildFormGroupConfig,
  getErrorMessageByControlKey,
  getControlValidation,
} from './helpers';
import { IFormConfig, IFormValue } from './interfaces';
import { Validators } from '@angular/forms';

describe('helpers', () => {
  let formConfig: IFormConfig;
  let controlKeys: string[];

  beforeEach(() => {
    formConfig = {
      _validators: {
        email: [Validators.required, Validators.email],
        password: [Validators.required],
        verifyPassword: [Validators.required],
      },
      _defaultValues: {
        email: 'myEmail',
        password: 'myPassword',
        verifyPassword: 'myPasswordVerified',
      },
      _errorMessages: {
        email: {
          required: 'Email is required.',
          email: 'Invalid email.',
        },
        password: {
          required: 'Password is required.',
        },
        verifyPassword: {
          required: 'Password verification is required.',
        },
      },
    };

    controlKeys = Object.keys(formConfig._defaultValues);
  });

  afterEach(() => {});

  describe('buildConfig', () => {
    it('should create IFormConfig', () => {
      const r: IFormConfig = buildConfig(formConfig);
      expect(r._validators.email).toBeDefined();
      expect(r._defaultValues.email).toBeDefined();
      expect(r._errorMessages.email.required).toBeDefined();
      expect(r._errorMessages.password.required).toBeDefined();
    });
  });

  describe('buildDefaultResponse', () => {
    it('should create defaultResponse', () => {
      const r: any = buildDefaultResponse(buildConfig(formConfig));
      expect(r.email.required.hasError).toBe(false);
      expect(r.email.required.message).toBe('Email is required.');

      expect(r.email.email.hasError).toBe(false);
      expect(r.email.email.message).toBe('Invalid email.');

      expect(r.verifyPassword.required.hasError).toBe(false);
      expect(r.verifyPassword.required.message).toBe('Password verification is required.');
    });
  });

  describe('buildFormGroupConfig', () => {
    it('should create formGroupConfig', () => {
      const r: any = buildFormGroupConfig(buildConfig(formConfig));
      expect(r.email[0]).toBe('myEmail');
      expect(r.password[0]).toBe('myPassword');
      expect(r.verifyPassword[0]).toBe('myPasswordVerified');

      expect(r.email[1]).toBeDefined();
      expect(r.password[1]).toBeDefined();
      expect(r.verifyPassword[1]).toBeDefined();
    });
  });

  describe('getErrorMessageByControlKey', () => {
    it('should get error messages', () => {
      const emailErrors: any = {
        required: false,
        email: true,
      };

      const controlKey = 'email';
      const r: any = getErrorMessageByControlKey(emailErrors, controlKey, formConfig._errorMessages);

      expect(r.required.hasError).toBe(false);
      expect(r.required.message).toBe('Email is required.');

      expect(r.email.hasError).toBe(true);
      expect(r.email.message).toBe('Invalid email.');
    });
  });

  describe('getControlValidation', () => {
    it('should return IFormValue', () => {
      const control: any = {
        dirty: true,
        pristine: true,
        touched: true,
        valid: true,
        invalid: true,
        value: true,
        errors: true,
      };

      const r: IFormValue = getControlValidation(control);
      expect(r.dirty).toBe(true);
      expect(r.pristine).toBe(true);
      expect(r.touched).toBe(true);
      expect(r.valid).toBe(true);
      expect(r.invalid).toBe(true);
      expect(r.value).toBe(true);
      expect(r.errors).toBe(true);
    });
  });

  describe('buildControls', () => {
    it('should return controls', () => {
      const formControls: any = {
        email: {
          dirty: true,
          pristine: true,
          touched: true,
          valid: true,
          invalid: true,
          value: true,
          errors: true,
        },
        password: {
          dirty: true,
          pristine: true,
          touched: true,
          valid: true,
          invalid: true,
          value: true,
          errors: false,
        },
        verifyPassword: {
          dirty: true,
          pristine: true,
          touched: true,
          valid: true,
          invalid: true,
          value: true,
          errors: true,
        },
      };

      const r: any = buildControls(controlKeys, formControls);
      expect(r.email.dirty).toBeDefined();
      expect(r.password.dirty).toBeDefined();
      expect(r.verifyPassword.dirty).toBeDefined();
    });
  });

  describe('buildResponseTree', () => {
    it('should return response tree with errors', () => {
      const formControls: any = {
        email: {
          dirty: true,
          pristine: true,
          touched: true,
          valid: true,
          invalid: true,
          value: true,
          errors: {
            required: false,
            email: true,
          },
        },
        password: {
          dirty: true,
          pristine: true,
          touched: true,
          valid: true,
          invalid: true,
          value: true,
          errors: null,
        },
        verifyPassword: {
          dirty: true,
          pristine: true,
          touched: true,
          valid: true,
          invalid: true,
          value: true,
          errors: null,
        },
      };

      const defaultValue = buildDefaultResponse(formConfig);

      const r: any = buildResponseTree(controlKeys, formConfig._errorMessages, defaultValue, formControls);

      const result = {
        hasError: true,
        email: {
          required: {
            hasError: false,
            message: 'Email is required.',
          },
          email: {
            hasError: true,
            message: 'Invalid email.',
          },
          dirty: true,
          pristine: true,
          touched: true,
          valid: true,
          invalid: true,
          value: true,
          errors: {
            required: {
              hasError: false,
              message: 'Email is required.',
            },
            email: {
              hasError: true,
              message: 'Invalid email.',
            },
          },
          hasError: true,
        },
        password: {
          required: {
            hasError: false,
            message: 'Password is required.',
          },
          dirty: true,
          pristine: true,
          touched: true,
          valid: true,
          invalid: true,
          value: true,
          errors: {
            required: {
              hasError: false,
              message: 'Password is required.',
            },
          },
          hasError: false,
        },
        verifyPassword: {
          required: {
            hasError: false,
            message: 'Password verification is required.',
          },
          dirty: true,
          pristine: true,
          touched: true,
          valid: true,
          invalid: true,
          value: true,
          errors: {
            required: {
              hasError: false,
              message: 'Password verification is required.',
            },
          },
          hasError: false,
        },
      };

      expect(r).toEqual(result);
    });

    it('should return response tree without errors', () => {
      const formControls: any = {
        email: {
          dirty: true,
          pristine: true,
          touched: true,
          valid: true,
          invalid: true,
          value: true,
          errors: null,
        },
        password: {
          dirty: true,
          pristine: true,
          touched: true,
          valid: true,
          invalid: true,
          value: true,
          errors: null,
        },
        verifyPassword: {
          dirty: true,
          pristine: true,
          touched: true,
          valid: true,
          invalid: true,
          value: true,
          errors: null,
        },
      };

      const defaultValue = buildDefaultResponse(formConfig);

      const r: any = buildResponseTree(controlKeys, formConfig._errorMessages, defaultValue, formControls);

      const result = {
        hasError: false,
        email: {
          required: {
            hasError: false,
            message: 'Email is required.',
          },
          email: {
            hasError: false,
            message: 'Invalid email.',
          },
          dirty: true,
          pristine: true,
          touched: true,
          valid: true,
          invalid: true,
          value: true,
          errors: {
            required: {
              hasError: false,
              message: 'Email is required.',
            },
            email: {
              hasError: false,
              message: 'Invalid email.',
            },
          },
          hasError: false,
        },
        password: {
          required: {
            hasError: false,
            message: 'Password is required.',
          },
          dirty: true,
          pristine: true,
          touched: true,
          valid: true,
          invalid: true,
          value: true,
          errors: {
            required: {
              hasError: false,
              message: 'Password is required.',
            },
          },
          hasError: false,
        },
        verifyPassword: {
          required: {
            hasError: false,
            message: 'Password verification is required.',
          },
          dirty: true,
          pristine: true,
          touched: true,
          valid: true,
          invalid: true,
          value: true,
          errors: {
            required: {
              hasError: false,
              message: 'Password verification is required.',
            },
          },
          hasError: false,
        },
      };

      expect(r).toEqual(result);
    });
  });
});
