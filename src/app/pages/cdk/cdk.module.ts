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
  ],
})
export class CdkModule {}
