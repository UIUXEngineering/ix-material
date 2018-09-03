import { DateValueformModule } from './date-value.module';

describe('DateValueModule', () => {
  let dateValueModule: DateValueformModule;

  beforeEach(() => {
    dateValueModule = new DateValueformModule();
  });

  it('should create an instance', () => {
    expect(dateValueModule).toBeTruthy();
  });
});
