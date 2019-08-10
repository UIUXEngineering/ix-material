#!/usr/bin/env bash

yarn remove jasmine-core
yarm remove jasmine-spec-reporter
yarn remove karma
yarn remove karma-chrome-launcher
yarn remove karma-cli
yarn remove karma-coverage-istanbul-reporter
yarn remove karma-jasmine

yarn add karma-coverage-istanbul-reporter@1.2.1 --dev
yarn add karma-cli@1.0.1 --dev
yarn add karma-chrome-launcher@2.2.0 --dev
yarn add karma@2.0.0 --dev
yarn add jasmine-spec-reporter@4.2.1 --dev
yarn add jasmine-core@2.99 --dev
yarn add karma-jasmine@1.1.0 --dev
