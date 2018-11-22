export interface LabelOptions {
  ALWAYS: string;
  NEVER: string;
}

export interface AppearanceOptions {
  LEGACY: string;
  STANDARD: string;
  FILL: string;
  OUTLINE: string;
}

export interface FormOptions {
  FLOAT_LABEL: LabelOptions;
  APPEARANCE: AppearanceOptions;
}

export const FORM_OPTIONS: FormOptions = {
  FLOAT_LABEL: {
    ALWAYS: 'always',
    NEVER: 'never',
  },
  APPEARANCE: {
    LEGACY: 'legacy',
    STANDARD: 'standard',
    FILL: 'fill',
    OUTLINE: 'outline',
  },
};
