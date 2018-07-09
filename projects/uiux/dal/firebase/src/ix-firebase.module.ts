import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { IxFirestoreService } from './ix-firestore.service';

@NgModule({
  imports: [AngularFirestoreModule],
  providers: [IxFirestoreService],
  exports: [],
})
export class IxFirebaseModule {}
