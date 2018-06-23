import { SpOnRenderCompleteModule } from './sp-on-render-complete.module';

describe('SpOnRenderCompleteModule', () => {
  let spOnRenderCompleteModule: SpOnRenderCompleteModule;

  beforeEach(() => {
    spOnRenderCompleteModule = new SpOnRenderCompleteModule();
  });

  it('should create an instance', () => {
    expect(spOnRenderCompleteModule).toBeTruthy();
  });
});
