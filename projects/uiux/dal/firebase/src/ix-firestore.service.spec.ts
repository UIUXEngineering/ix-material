import { TestBed, inject } from '@angular/core/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { IxFirestoreService } from './ix-firestore.service';

const firebaseConfig: any = {
  apiKey: 'some-long-key-string',
  authDomain: 'mock-app-dev.firebaseapp.com',
  databaseURL: 'https://mock-app-dev.firebaseio.com',
  projectId: 'mock-app-dev',
  storageBucket: 'mock-app.appspot.com',
  messagingSenderId: '123456789',
};

describe('IxFirestoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(firebaseConfig, 'mockApp'), AngularFirestoreModule],
      providers: [IxFirestoreService],
    });
  });

  it('should be created', inject([IxFirestoreService], (service: IxFirestoreService) => {
    expect(service).toBeTruthy();
  }));
});
