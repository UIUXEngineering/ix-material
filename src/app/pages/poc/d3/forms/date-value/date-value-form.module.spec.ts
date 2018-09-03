import { DateValueFormModule } from './date-value-form.module';

describe('DateValueModule', () => {
  let dateValueModule: DateValueFormModule;

  beforeEach(() => {
    dateValueModule = new DateValueFormModule();
  });

  it('should create an instance', () => {
    expect(dateValueModule).toBeTruthy();
  });
});
