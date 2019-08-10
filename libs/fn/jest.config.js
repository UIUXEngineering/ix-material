module.exports = {
  name: 'fn',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/fn',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
