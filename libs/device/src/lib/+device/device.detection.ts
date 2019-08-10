/**
 * https://www.theiphonewiki.com/wiki/Models#iPhone
 * @param model
 */
export function isiPhoneX(model: string): boolean {
  return model && model.length ? /iPhone10/gi.test(model) : false;
}

export function isiPhoneXR(model: string): boolean {
  return model && model.length ? /iPhone11/gi.test(model) : false;
}

export function isDesktop(platform: string): boolean {
  return platform && platform.length ? /desktop/gi.test(platform) : false;
}

export function isElectron(): boolean {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return userAgent.indexOf('electron') > -1;
}

export function isBrowser(platform: string): boolean {
  return platform && platform.length ? /browser/gi.test(platform) : false;
}

export function isCordova(platformID: string): boolean {
  return platformID && platformID.length
    ? !isDesktop(platformID) && !isBrowser(platformID)
    : false;
}

export function isIphoneNotch(model: string): boolean {
  return isiPhoneX(model) || isiPhoneXR(model);
}

// export function isIPhoneX(): boolean {
//   // Really basic check for the ios platform
//   // https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
//   // const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
//   const iOS = /iPhone/.test(navigator.userAgent) && !window['MSStream'];
//
//   // Get the device pixel ratio
//   const ratio = window.devicePixelRatio || 1;
//
//   // Define the users device screen dimensions
//   const screen = {
//     width : window.screen.width * ratio,
//     height : window.screen.height * ratio
//   };
//
//   // iPhone X Detection
//   return (iOS && screen.width === 1125 && screen.height === 2436) ||
//     (iOS && screen.height === 1125 && screen.width === 2436);
// }
