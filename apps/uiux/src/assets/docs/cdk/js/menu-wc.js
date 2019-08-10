'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ix-utilities documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/IxBrowserModule.html" data-type="entity-link">IxBrowserModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-IxBrowserModule-d103db383c5dbbbd8011d5d9096fb2d3"' : 'data-target="#xs-injectables-links-module-IxBrowserModule-d103db383c5dbbbd8011d5d9096fb2d3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-IxBrowserModule-d103db383c5dbbbd8011d5d9096fb2d3"' :
                                        'id="xs-injectables-links-module-IxBrowserModule-d103db383c5dbbbd8011d5d9096fb2d3"' }>
                                        <li class="link">
                                            <a href="injectables/IxBrowserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>IxBrowserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/IxCdkModule.html" data-type="entity-link">IxCdkModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IxCdkModule-24309fa5fe334ad3a3acf458d7b07040"' : 'data-target="#xs-components-links-module-IxCdkModule-24309fa5fe334ad3a3acf458d7b07040"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IxCdkModule-24309fa5fe334ad3a3acf458d7b07040"' :
                                            'id="xs-components-links-module-IxCdkModule-24309fa5fe334ad3a3acf458d7b07040"' }>
                                            <li class="link">
                                                <a href="components/IxCdkComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IxCdkComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IxDynamicComponentsModule.html" data-type="entity-link">IxDynamicComponentsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-IxDynamicComponentsModule-bdc8dc98393d48b940f4264e2868ca18"' : 'data-target="#xs-directives-links-module-IxDynamicComponentsModule-bdc8dc98393d48b940f4264e2868ca18"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-IxDynamicComponentsModule-bdc8dc98393d48b940f4264e2868ca18"' :
                                        'id="xs-directives-links-module-IxDynamicComponentsModule-bdc8dc98393d48b940f4264e2868ca18"' }>
                                        <li class="link">
                                            <a href="directives/IxCmpHostDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">IxCmpHostDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-IxDynamicComponentsModule-bdc8dc98393d48b940f4264e2868ca18"' : 'data-target="#xs-injectables-links-module-IxDynamicComponentsModule-bdc8dc98393d48b940f4264e2868ca18"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-IxDynamicComponentsModule-bdc8dc98393d48b940f4264e2868ca18"' :
                                        'id="xs-injectables-links-module-IxDynamicComponentsModule-bdc8dc98393d48b940f4264e2868ca18"' }>
                                        <li class="link">
                                            <a href="injectables/IxDynamicComponentService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>IxDynamicComponentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpFormBuilderServiceModule.html" data-type="entity-link">SpFormBuilderServiceModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SpPipesModule.html" data-type="entity-link">SpPipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SpPipesModule-ffed9951be566f233dfe945a1116455b"' : 'data-target="#xs-pipes-links-module-SpPipesModule-ffed9951be566f233dfe945a1116455b"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SpPipesModule-ffed9951be566f233dfe945a1116455b"' :
                                            'id="xs-pipes-links-module-SpPipesModule-ffed9951be566f233dfe945a1116455b"' }>
                                            <li class="link">
                                                <a href="pipes/SpDatePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpDatePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SpShowSingleErrorPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpShowSingleErrorPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractFormFactory.html" data-type="entity-link">AbstractFormFactory</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormBuilderFactoryService.html" data-type="entity-link">FormBuilderFactoryService</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormService.html" data-type="entity-link">FormService</a>
                            </li>
                            <li class="link">
                                <a href="classes/IxComponentItem.html" data-type="entity-link">IxComponentItem</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/IxCdkService.html" data-type="entity-link">IxCdkService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MockNgZone.html" data-type="entity-link">MockNgZone</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppearanceOptions.html" data-type="entity-link">AppearanceOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormOptions.html" data-type="entity-link">FormOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICreateFactory.html" data-type="entity-link">ICreateFactory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFormConfig.html" data-type="entity-link">IFormConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFormDefaultValueConfig.html" data-type="entity-link">IFormDefaultValueConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFormErrorsConfig.html" data-type="entity-link">IFormErrorsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFormGroupConfig.html" data-type="entity-link">IFormGroupConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFormService.html" data-type="entity-link">IFormService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFormValidatorsConfig.html" data-type="entity-link">IFormValidatorsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFormValue.html" data-type="entity-link">IFormValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUseFactoryProvider.html" data-type="entity-link">IUseFactoryProvider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IValidationError.html" data-type="entity-link">IValidationError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IxDynamicComponent.html" data-type="entity-link">IxDynamicComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LabelOptions.html" data-type="entity-link">LabelOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});