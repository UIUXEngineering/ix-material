import { IxOnRenderCompleteModule } from './ix-on-render-complete.module';

describe('IxOnRenderCompleteModule', () => {
  let ixOnRenderCompleteModule: IxOnRenderCompleteModule;

  beforeEach(() => {
    ixOnRenderCompleteModule = new IxOnRenderCompleteModule();
  });

  it('should create an instance', () => {
    expect(IxOnRenderCompleteModule).toBeTruthy();
  });
});
