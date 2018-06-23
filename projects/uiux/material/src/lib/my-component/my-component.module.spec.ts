import { MyComponentModule } from './my-component.module';

describe('MyComponentModule', () => {
  let myComponentModule: MyComponentModule;

  beforeEach(() => {
    myComponentModule = new MyComponentModule();
  });

  it('should create an instance', () => {
    expect(myComponentModule).toBeTruthy();
  });
});
