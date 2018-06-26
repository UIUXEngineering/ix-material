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
import { CreateObjectWithPathComponent } from './object/create-object-with-path/create-object-with-path.component';
import { FindPropertiesComponent } from './object/find-properties/find-properties.component';
import { FindPropertyDataComponent } from './object/find-property-data/find-property-data.component';
import { FindPropsWithValueComponent } from './object/find-props-with-value/find-props-with-value.component';
import { GetInComponent } from './object/get-in/get-in.component';
import { HasValueEqualComponent } from './object/has-value-equal/has-value-equal.component';
import { HasValueInComponent } from './object/has-value-in/has-value-in.component';
import { HasValueNotEqualInComponent } from './object/has-value-not-equal-in/has-value-not-equal-in.component';
import { HasValueNotEqualComponent } from './object/has-value-not-equal/has-value-not-equal.component';
import { HasValueComponent } from './object/has-value/has-value.component';
import { InvokeIfElseInConfigComponent } from './object/invoke-if-else-in-config/invoke-if-else-in-config.component';
import { InvokeIfElseInComponent } from './object/invoke-if-else-in/invoke-if-else-in.component';
import { InvokeIfInComponent } from './object/invoke-if-in/invoke-if-in.component';
import { InvokeInComponent } from './object/invoke-in/invoke-in.component';

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
        path: 'object/createObjectWithPath',
        component: CreateObjectWithPathComponent,
      },
      {
        path: 'object/findProperties',
        component: FindPropertiesComponent,
      },
      {
        path: 'object/findPropertyData',
        component: FindPropertyDataComponent,
      },
      {
        path: 'object/findPropsWithValue',
        component: FindPropsWithValueComponent,
      },
      {
        path: 'object/getIn',
        component: GetInComponent,
      },
      {
        path: 'object/hasValue',
        component: HasValueComponent,
      },
      {
        path: 'object/hasValueEqual',
        component: HasValueEqualComponent,
      },
      {
        path: 'object/hasValueIn',
        component: HasValueInComponent,
      },
      {
        path: 'object/hasValueNotEqual',
        component: HasValueNotEqualComponent,
      },
      {
        path: 'object/hasValueNotEqualIn',
        component: HasValueNotEqualInComponent,
      },
      {
        path: 'object/invokeIfElseIn',
        component: InvokeIfElseInComponent,
      },
      {
        path: 'object/invokeIfElseInConfig',
        component: InvokeIfElseInConfigComponent,
      },
      {
        path: 'object/invokeIfIn',
        component: InvokeIfInComponent,
      },
      {
        path: 'object/invokeIn',
        component: InvokeInComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdkRoutingModule {}
