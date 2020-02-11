module.exports = {
  name: 'dal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/dal',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
