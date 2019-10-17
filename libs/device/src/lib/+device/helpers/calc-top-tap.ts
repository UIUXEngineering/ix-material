export function calcTopTap(
  isSmallScreen: boolean,
  isIphoneNotch: boolean,
  isPortrait: boolean,
  isDesktop: boolean
): number {
  if (isIphoneNotch && isPortrait) {
    return 92;
  }

  if (isIphoneNotch && !isPortrait) {
    return 64;
  }

  if (isDesktop) {
    return isSmallScreen ? 96 : 102;
  } else {
    return isSmallScreen ? 56 : 62;
  }
}
