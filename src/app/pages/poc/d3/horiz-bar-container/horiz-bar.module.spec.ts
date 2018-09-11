import { HorizBarModule } from './horiz-bar.module';

describe('HorizBarModule', () => {
  let horizBarModule: HorizBarModule;

  beforeEach(() => {
    horizBarModule = new HorizBarModule();
  });

  it('should create an instance', () => {
    expect(horizBarModule).toBeTruthy();
  });
});
