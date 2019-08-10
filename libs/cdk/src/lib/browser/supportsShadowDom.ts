export function supportsShadowDom() {
  const testEl = document.createElement('div');
  return typeof testEl.attachShadow !== 'undefined';
}
