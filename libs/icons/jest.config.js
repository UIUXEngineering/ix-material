module.exports = {
  name: 'icons',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/icons',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
