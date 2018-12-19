import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { IxFirestoreService } from './ix-firestore.service';

@NgModule({
  imports: [AngularFirestoreModule],
  providers: [IxFirestoreService],
  exports: [],
})
export class IxFirebaseModule {}
