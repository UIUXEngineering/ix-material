import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkComponent } from './cdk.component';
import { AddingToCdkComponent } from './guide/adding-to-cdk/adding-to-cdk.component';
import { CdkOverviewComponent } from './guide/cdk-overview/cdk-overview.component';
import { AllPropsAreDefinedInComponent } from './object/all-props-are-defined-in/all-props-are-defined-in.component';
import { AllPropsAreDefinedComponent } from './object/all-props-are-defined/all-props-are-defined.component';
import { AllPropsAreTruthyInComponent } from './object/all-props-are-truthy-in/all-props-are-truthy-in.component';
import { AllPropsAreTruthyComponent } from './object/all-props-are-truthy/all-props-are-truthy.component';
import { AllPropsHaveValueInComponent } from './object/all-props-have-value-in/all-props-have-value-in.component';
import { AllPropsHaveValueComponent } from './object/all-props-have-value/all-props-have-value.component';
import { CloneComponent } from './object/clone/clone.component';
import { HasValueInComponent } from './object/has-value-in/has-value-in.component';
import { HasValueComponent } from './object/has-value/has-value.component';

const routes: Routes = [
  {
    path: '',
    component: CdkComponent,
    children: [
      {
        path: 'guides/cdk-overview',
        component: CdkOverviewComponent,
      },
      {
        path: 'guides/adding-to-cdk',
        component: AddingToCdkComponent,
      },
      {
        path: 'object/hasValue',
        component: HasValueComponent,
      },
      {
        path: 'object/allPropsAreDefined',
        component: AllPropsAreDefinedComponent,
      },
      {
        path: 'object/allPropsAreDefinedIn',
        component: AllPropsAreDefinedInComponent,
      },
      {
        path: 'object/allPropsAreTruthy',
        component: AllPropsAreTruthyComponent,
      },
      {
        path: 'object/allPropsAreTruthyIn',
        component: AllPropsAreTruthyInComponent,
      },
      {
        path: 'object/allPropsHaveValue',
        component: AllPropsHaveValueComponent,
      },
      {
        path: 'object/allPropsHaveValueIn',
        component: AllPropsHaveValueInComponent,
      },
      {
        path: 'object/clone',
        component: CloneComponent,
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
