module.exports = {
  name: 'uiux',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/uiux',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
