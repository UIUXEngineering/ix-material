import { Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage';
import { ThemesModule } from './views/themes/themes.module';

export const APP_ROUTES: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full', data: {} },
  {
    path: 'cdk',
    loadChildren: './views/cdk/cdk.module#CdkModule',
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'material',
    loadChildren: './views/components/components.module#ComponentsModule',
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'guides',
    loadChildren: './views/guides/guides.module#GuidesModule',
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'icons',
    loadChildren: './views/icons/icons.module#IconsModule',
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'poc',
    loadChildren: './views/poc/poc.module#PocModule',
    data: <any>{
      preload: true,
    },
  },
  {
    path: 'themes',
    loadChildren: './views/themes/themes.module#ThemesModule',
    data: <any>{
      preload: true,
    },
  },
  { path: '**', redirectTo: '' },
];
