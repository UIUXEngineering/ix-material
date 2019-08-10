module.exports = {
  name: 'dal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/dal',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
