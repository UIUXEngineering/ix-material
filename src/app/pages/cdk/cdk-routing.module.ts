import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { propHasValueInAllPaths } from '../../../../projects/uiux/cdk/object/src/prop-has-value-in-all-paths';
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
import { IsTruthyInComponent } from './object/is-truthy-in/is-truthy-in.component';
import { IsArraySyntaxComponent } from './object/key-converter/is-array-syntax/is-array-syntax.component';
import { KeySplitterIntoImmutablePathComponent } from './object/key-converter/key-splitter-into-immutable-path/key-splitter-into-immutable-path.component';
import { SplitKeysIntoDotNotationComponent } from './object/key-converter/split-keys-into-dot-notation/split-keys-into-dot-notation.component';
import { MergePropsIfNoValueComponent } from './object/merge-props-if-no-value/merge-props-if-no-value.component';
import { MergeComponent } from './object/merge/merge.component';
import { PropHasValueInAllPathsComponent } from './object/prop-has-value-in-all-paths/prop-has-value-in-all-paths.component';
import { PropTruthyInAllPathsComponent } from './object/prop-truthy-in-all-paths/prop-truthy-in-all-paths.component';
import { PropsAreEqualComponent } from './object/props-are-equal/props-are-equal.component';
import { PropsAreTruthyComponent } from './object/props-are-truthy/props-are-truthy.component';
import { PropsContainsStringComponent } from './object/props-contains-string/props-contains-string.component';
import { PropsHaveValueComponent } from './object/props-have-value/props-have-value.component';
import { PropsWithNoValueComponent } from './object/props-with-no-value/props-with-no-value.component';
import { SetInIfSrcComponent } from './object/set-in-if-src/set-in-if-src.component';
import { SetInComponent } from './object/set-in/set-in.component';
import { HasValueComponent } from './value/has-value/has-value.component';
import { InvokeIfElseInConfigComponent } from './object/invoke-if-else-in-config/invoke-if-else-in-config.component';
import { InvokeIfElseInComponent } from './object/invoke-if-else-in/invoke-if-else-in.component';
import { InvokeIfInComponent } from './object/invoke-if-in/invoke-if-in.component';
import { InvokeInComponent } from './object/invoke-in/invoke-in.component';
import { IsDefinedInComponent } from './object/is-defined-in/is-defined-in.component';
import { IsDefinedComponent } from './object/is-defined/is-defined.component';
import { IsInComponent } from './object/is-in/is-in.component';
import { IsMatchComponent } from './object/is-match/is-match.component';
import { IsScalarComponent } from './value/is-scalar/is-scalar.component';

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
        path: 'object/hasValueIn',
        component: HasValueInComponent,
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
      {
        path: 'object/isDefinedIn',
        component: IsDefinedInComponent,
      },
      {
        path: 'object/isDefinedIn',
        component: IsDefinedInComponent,
      },
      {
        path: 'object/isIn',
        component: IsInComponent,
      },
      {
        path: 'object/isMatch',
        component: IsMatchComponent,
      },
      {
        path: 'object/isTruthyIn',
        component: IsTruthyInComponent,
      },
      {
        path: 'object/splitKeysIntoDotNotation',
        component: SplitKeysIntoDotNotationComponent,
      },
      {
        path: 'object/isArraySyntax',
        component: IsArraySyntaxComponent,
      },
      {
        path: 'object/keySplitterIntoImmutablePath',
        component: KeySplitterIntoImmutablePathComponent,
      },
      {
        path: 'object/merge',
        component: MergeComponent,
      },
      {
        path: 'object/mergePropsIfNoValue',
        component: MergePropsIfNoValueComponent,
      },
      {
        path: 'object/propHasValueInAllPaths',
        component: PropHasValueInAllPathsComponent,
      },
      {
        path: 'object/propTruthyInAllPaths',
        component: PropTruthyInAllPathsComponent,
      },
      {
        path: 'object/propsAreEqual',
        component: PropsAreEqualComponent,
      },
      {
        path: 'object/propsAreTruthy',
        component: PropsAreTruthyComponent,
      },
      {
        path: 'object/propsContainsString',
        component: PropsContainsStringComponent,
      },
      {
        path: 'object/propsHaveValue',
        component: PropsHaveValueComponent,
      },
      {
        path: 'object/propsWithNoValue',
        component: PropsWithNoValueComponent,
      },
      {
        path: 'object/setIn',
        component: SetInComponent,
      },
      {
        path: 'object/setInIfSrc',
        component: SetInIfSrcComponent,
      },

      // value
      {
        path: 'value/isScalar',
        component: IsScalarComponent,
      },
      {
        path: 'value/hasValue',
        component: HasValueComponent,
      },
      {
        path: 'value/hasValueEqual',
        component: HasValueEqualComponent,
      },
      {
        path: 'value/hasValueNotEqual',
        component: HasValueNotEqualComponent,
      },
      {
        path: 'value/isDefined',
        component: IsDefinedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdkRoutingModule {}
