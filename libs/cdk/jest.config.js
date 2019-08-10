module.exports = {
  name: 'cdk',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/cdk',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
