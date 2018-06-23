/**
 * Build configuration for the packaging tool. This file will be automatically detected and used
 * to build the different packages inside of Material.
 */
const {join} = require('path');

const package = require('./package.json');

/** Current version of the project*/
const buildVersion = package.version;


const angularVersion = package.dependencies['@angular/core'];
const angularCommonVersion = package.dependencies['@angular/common'];
const cdkVersion = package.dependencies['@angular/cdk'];
const flexLayoutVersion = package.dependencies['@angular/flex-layout'];
const materialVersion = package.dependencies['@angular/material'];

const lodashVersion = package.dependencies['lodash-es'];
const immutableVersion = package.dependencies['immutable'];
const momentVersion = package.dependencies['moment'];
const rxjsVersion = package.dependencies['rxjs'];
const rxjsCompatVersion = package.dependencies['rxjs-compat'];

/** License that will be placed inside of all created bundles. */
const buildLicense = `/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */`;

module.exports = {
  projectVersion: buildVersion,
  angularVersion: angularVersion,
  angularCommonVersion: angularCommonVersion,
  cdkVersion: cdkVersion,
  materialVersion: materialVersion,
  lodashVersion: lodashVersion,
  immutableVersion: immutableVersion,
  flexLayoutVersion: flexLayoutVersion,
  momentVersion: momentVersion,
  rxjsVersion: rxjsVersion,
  rxjsCompatVersion: rxjsCompatVersion,
  projectDir: __dirname,
  packagesDir: join(__dirname, 'src'),
  outputDir: join(__dirname, 'dist'),
  licenseBanner: buildLicense
};
