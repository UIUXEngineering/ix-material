import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CdkRoutingModule } from './cdk-routing.module';
import { CdkComponent } from './cdk.component';
import { AddingToCdkComponent } from './guide/adding-to-cdk/adding-to-cdk.component';
import { CdkOverviewComponent } from './guide/cdk-overview/cdk-overview.component';
import { HasValueInComponent } from './object/has-value-in/has-value-in.component';
import { HasValueComponent } from './object/has-value/has-value.component';
import { AllPropsAreDefinedComponent } from './object/all-props-are-defined/all-props-are-defined.component';
import { AllPropsAreDefinedInComponent } from './object/all-props-are-defined-in/all-props-are-defined-in.component';
import { AllPropsAreTruthyComponent } from './object/all-props-are-truthy/all-props-are-truthy.component';
import { AllPropsAreTruthyInComponent } from './object/all-props-are-truthy-in/all-props-are-truthy-in.component';
import { AllPropsHaveValueComponent } from './object/all-props-have-value/all-props-have-value.component';
import { AllPropsHaveValueInComponent } from './object/all-props-have-value-in/all-props-have-value-in.component';
import { CloneComponent } from './object/clone/clone.component';
import { CreateObjectWithPathComponent } from './object/create-object-with-path/create-object-with-path.component';
import { FindPropertiesComponent } from './object/find-properties/find-properties.component';
import { FindPropertyDataComponent } from './object/find-property-data/find-property-data.component';
import { FindPropsWithValueComponent } from './object/find-props-with-value/find-props-with-value.component';
import { GetInComponent } from './object/get-in/get-in.component';
import { HasValueEqualComponent } from './object/has-value-equal/has-value-equal.component';
import { HasValueNotEqualComponent } from './object/has-value-not-equal/has-value-not-equal.component';
import { HasValueNotEqualInComponent } from './object/has-value-not-equal-in/has-value-not-equal-in.component';
import { InvokeIfElseInComponent } from './object/invoke-if-else-in/invoke-if-else-in.component';
import { InvokeIfElseInConfigComponent } from './object/invoke-if-else-in-config/invoke-if-else-in-config.component';
import { InvokeIfInComponent } from './object/invoke-if-in/invoke-if-in.component';
import { InvokeInComponent } from './object/invoke-in/invoke-in.component';
import { IsDefinedComponent } from './object/is-defined/is-defined.component';
import { IsDefinedInComponent } from './object/is-defined-in/is-defined-in.component';
import { IsInComponent } from './object/is-in/is-in.component';
import { IsMatchComponent } from './object/is-match/is-match.component';
import { IsScalarComponent } from './object/is-scalar/is-scalar.component';

@NgModule({
  imports: [CommonModule, SharedModule, CdkRoutingModule],
  declarations: [
    CdkComponent,
    HasValueComponent,
    CdkOverviewComponent,
    HasValueInComponent,
    AddingToCdkComponent,
    AllPropsAreDefinedComponent,
    AllPropsAreDefinedInComponent,
    AllPropsAreTruthyComponent,
    AllPropsAreTruthyInComponent,
    AllPropsHaveValueComponent,
    AllPropsHaveValueInComponent,
    CloneComponent,
    CreateObjectWithPathComponent,
    FindPropertiesComponent,
    FindPropertyDataComponent,
    FindPropsWithValueComponent,
    GetInComponent,
    HasValueEqualComponent,
    HasValueNotEqualComponent,
    HasValueNotEqualInComponent,
    InvokeIfElseInComponent,
    InvokeIfElseInConfigComponent,
    InvokeIfInComponent,
    InvokeInComponent,
    IsDefinedComponent,
    IsDefinedInComponent,
    IsInComponent,
    IsMatchComponent,
    IsScalarComponent,
  ],
})
export class CdkModule {}
