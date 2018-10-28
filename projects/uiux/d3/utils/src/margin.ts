import { IxD3Margin, IxD3MarginFn } from './_interfaces';

/**
 * @param margins
 */
export function ixD3Margin(...margins: number[]): IxD3Margin {
  if (margins.length === 1) {
    const margin = margins[0];
    return {
      top: margin,
      right: margin,
      bottom: margin,
      left: margin,
    };
  } else {
    return {
      top: margins[0],
      right: margins[1],
      bottom: margins[2],
      left: margins[3],
    };
  }
}

/**
 * Returns Function
 * @param margins
 */
export function ixD3MarginFn(...margins: number[]): IxD3MarginFn {
  return () => ixD3Margin(...margins);
}
