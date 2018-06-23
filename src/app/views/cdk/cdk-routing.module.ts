import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkComponent } from './cdk.component';
import { AddingToCdkComponent } from './guide/adding-to-cdk/adding-to-cdk.component';
import { CdkOverviewComponent } from './guide/cdk-overview/cdk-overview.component';
import { HasValueInComponent } from './object/has-value-in/has-value-in.component';
import { HasValueComponent } from './object/has-value/has-value.component';

const routes: Routes = [
  {
    path: '',
    component: CdkComponent,
    children: [
      {
        path: 'guide/cdk-overview',
        component: CdkOverviewComponent,
      },
      {
        path: 'guide/adding-to-cdk',
        component: AddingToCdkComponent,
      },
      {
        path: 'object/hasValue',
        component: HasValueComponent,
      },
      {
        path: 'object/hasValueIn',
        component: HasValueInComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdkRoutingModule {}
