import { CdkModule } from './cdk.module';

describe('CdkModule', () => {
  let cdkModule: CdkModule;

  beforeEach(() => {
    cdkModule = new CdkModule();
  });

  it('should create an instance', () => {
    expect(cdkModule).toBeTruthy();
  });
});
