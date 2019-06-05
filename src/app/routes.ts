import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage';

export const APP_ROUTES: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full', data: {} },
  {
    path: 'cdk',
    loadChildren: () => import('./pages/cdk/cdk.module').then(m => m.CdkModule),
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'material',
    loadChildren: () => import('./pages/components/components.module').then(m => m.ComponentsModule),
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'dal',
    loadChildren: () => import('./pages/dal/dal.module').then(m => m.DalModule),
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'fn',
    loadChildren: () => import('./pages/fn/fn.module').then(m => m.FnModule),
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'guides',
    loadChildren: () => import('./pages/guides/guides.module').then(m => m.GuidesModule),
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'icons',
    loadChildren: () => import('./pages/icons/icons.module').then(m => m.IconsModule),
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'poc',
    loadChildren: () => import('./pages/poc/poc.module').then(m => m.PocModule),
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule),
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'themes',
    loadChildren: () => import('./pages/themes/themes.module').then(m => m.ThemesModule),
    data: <any>{
      preload: true,
    },
  },
  { path: '**', redirectTo: '' },
];
