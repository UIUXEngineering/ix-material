import { IxD3Margin, IxD3MarginFn } from './_interfaces';

/**
 * @param margin
 */
export function ixD3Margin(margin: number): IxD3Margin {
  return {
    top: margin,
    right: margin,
    bottom: margin,
    left: margin,
  };
}

/**
 * Returns Function
 * @param margin
 */
export function ixD3MarginFn(margin: number): IxD3MarginFn {
  return () => ixD3Margin(margin);
}
