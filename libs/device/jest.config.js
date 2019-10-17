module.exports = {
  name: 'device',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/device',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
