module.exports = {
  name: 'fn',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/fn',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
