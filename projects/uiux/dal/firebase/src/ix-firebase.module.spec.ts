import { IxFirebaseModule } from './ix-firebase.module';

describe('IxFirebaseModule', () => {
  let ixFirestoreModule: IxFirebaseModule;

  beforeEach(() => {
    ixFirestoreModule = new IxFirebaseModule();
  });

  it('should create an instance', () => {
    expect(ixFirestoreModule).toBeTruthy();
  });
});
