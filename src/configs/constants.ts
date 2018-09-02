export const NAVBAR_MENU_BREAKPOINT = '(max-width: 1100px)';
export const APP_NAME = 'UI Utilities For Angular';
export const GIT_REPO = 'https://github.com/UIUXEngineering/ix-utilities';
export const GIT_REPO_PROJECTS_BASE = `${GIT_REPO}/blob/master/projects/uiux`;
// export const GIT_REPO_PROJECTS_BASE = `${GIT_REPO}/projects/uiux`;
export const FN_EXAMPLE_BASE_URL = 'assets/examples/fn';
export const COMPONENT_EXAMPLE_BASE_URL = 'assets/examples/components';
export const FN = 'fn';
export const COMPONENTS = 'material';
export const GUIDES = 'guides';
export const ICONS = 'icons';
export const POC = 'poc';
export const THEMES = 'themes';
export const PROJECTS = {
  [COMPONENTS]: 'Components',
  [FN]: 'FN',
  [GUIDES]: 'Guides',
  [ICONS]: 'Icons',
  [POC]: 'PoC',
  [THEMES]: 'Themes',
};
export const sectionOrder: string[] = [FN, COMPONENTS, POC, ICONS, THEMES, GUIDES];
export const THEME_PICKER_THEMES: any[] = [
  {
    primary: '#673AB7',
    accent: '#FFC107',
    href: 'deeppurple-amber.css',
    isDark: false,
  },
  {
    // primary: '#3F51B5',
    primary: '#3f51b5',
    accent: '#E91E63',
    href: 'indigo-pink.css',
    // href: 'teal-pink.css',
    isDark: false,
    isDefault: true,
  },
  {
    primary: '#E91E63',
    accent: '#607D8B',
    href: 'pink-bluegrey.css',
    isDark: true,
  },
  {
    primary: '#9C27B0',
    accent: '#4CAF50',
    href: 'purple-green.css',
    isDark: true,
  },
];

export const ICON: any = {
  CDK: 'build',
  DAL: 'perm_data_setting',
  FN: 'repeat',
  GUIDE: 'list',
  MATERIAL: 'devices_other',
  RXJS: 'view_stream',
  SVC: 'refresh',

  // custom drawn icon
  CUSTOM: 'brush',
  POC: 'iconList:science',
  THEMES: 'format_paint',
};
