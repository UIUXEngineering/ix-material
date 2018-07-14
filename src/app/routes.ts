import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage';

export const APP_ROUTES: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full', data: {} },
  {
    path: 'cdk',
    loadChildren: './pages/cdk/cdk.module#CdkModule',
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'material',
    loadChildren: './pages/components/components.module#ComponentsModule',
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'guides',
    loadChildren: './pages/guides/guides.module#GuidesModule',
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'icons',
    loadChildren: './pages/icons/icons.module#IconsModule',
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'poc',
    loadChildren: './pages/poc/poc.module#PocModule',
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'themes',
    loadChildren: './pages/themes/themes.module#ThemesModule',
    data: <any>{
      preload: true,
    },
  },
  { path: '**', redirectTo: '' },
];
