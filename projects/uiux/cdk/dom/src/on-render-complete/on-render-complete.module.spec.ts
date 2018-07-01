import { SpOnRenderCompleteModule } from './ix-on-render-complete.module';

describe('IxOnRenderCompleteModule', () => {
  let spOnRenderCompleteModule: SpOnRenderCompleteModule;

  beforeEach(() => {
    spOnRenderCompleteModule = new SpOnRenderCompleteModule();
  });

  it('should create an instance', () => {
    expect(spOnRenderCompleteModule).toBeTruthy();
  });
});
