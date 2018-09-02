import { DalModule } from './dal.module';

describe('DalModule', () => {
  let dalModule: DalModule;

  beforeEach(() => {
    dalModule = new DalModule();
  });

  it('should create an instance', () => {
    expect(dalModule).toBeTruthy();
  });
});
