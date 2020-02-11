module.exports = {
  name: 'icons',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/icons',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
