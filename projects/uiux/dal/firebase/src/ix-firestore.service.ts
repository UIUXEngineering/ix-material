import { Injectable } from '@angular/core';
import { FirebaseFirestore } from '@firebase/firestore-types';
import { hasValue } from '@uiux/fn/common';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';
import { QueryFn } from 'angularfire2/firestore/interfaces';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { map, take, tap } from 'rxjs/operators';

export type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
export type DocPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable({
  providedIn: 'root',
})
export class IxFirestoreService {
  firestore: FirebaseFirestore;

  constructor(public afs: AngularFirestore) {
    this.firestore = afs.firestore;
  }

  /// Firebase Server Timestamp
  get timestamp(): firebase.firestore.FieldValue {
    // return firebase.database.ServerValue.TIMESTAMP;
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  /// **************
  col<T>(ref: CollectionPredicate<T>, queryFn?: QueryFn): AngularFirestoreCollection<T> {
    return typeof ref === 'string' ? this.afs.collection<T>(ref, queryFn) : ref;
  }

  /// **************
  /// Get Data

  doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === 'string' ? this.afs.doc<T>(ref) : ref;
  }

  /**
   * Usage
   * this.db.doc$('notes/ID')
   *
   * @param ref
   * @returns Observable<T>
   */
  doc$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc(ref)
      .snapshotChanges()
      .pipe(
        map((doc: any) => {
          if (doc.exists) {
            return doc.payload.data() as T;
          } else {
            return null;
          }
        })
      );
  }

  /**
   * Usage
   * this.db.doc$('notes/ID')
   *
   * @param ref
   * @returns Observable<T>
   */
  docRealTime$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc(ref)
      .valueChanges()
      .pipe(
        map((doc: any) => {
          // console.log(doc);
          // if (doc.exists) {
          //   return doc.payload.data() as T;
          // } else {
          //   return null;
          // }
          return doc;
        })
      );
  }

  /**
   * Usage:
   * this.db.col$('notes', ref => ref.where('user', '==', 'Jeff'))
   *
   * OR just like regular AngularFire
   * noteRef: AngularFireList = this.db.doc('notes/ID');
   * this.db.doc(noteRef)
   * this.noteRef.valueChanges()
   *
   * @param ref
   * @param queryFn
   * @returns Observable<T[]>
   */
  col$<T>(ref: CollectionPredicate<T>, queryFn?: QueryFn): Observable<T[]> {
    return this.col(ref, queryFn)
      .snapshotChanges()
      .pipe(
        map((docs: any) => {
          return docs.map((a: any) => a.payload.doc.data()) as T[];
        })
      );
  }

  /// **************
  /// Write Data
  /// **************

  /**
   * Get Collections with Document Ids Included
   *
   * Usage:
   * db.colWithIds$('notes')
   *
   * @param ref
   * @param queryFn
   * @returns Observable<any[]>
   */
  colWithIds$<T>(ref: CollectionPredicate<T>, queryFn?: QueryFn): Observable<any[]> {
    return this.col(ref, queryFn)
      .snapshotChanges()
      .pipe(
        map((actions: any) => {
          return actions.pipe(
            map((a: any) => {
              const data: any = a.payload.doc.data();
              const id: any = a.payload.doc.id;
              return { id, ...data };
            })
          );
        })
      );
  }

  /**
   * adds createdAt field
   *
   * Usage:
   * db.set('items/ID', data) })
   *
   * @param ref
   * @param data
   * @returns Promise<void>
   */
  set<T>(ref: DocPredicate<T>, data: any): Promise<void> {
    return this.doc(ref).set(this.payloadForSet(data));
  }

  setWithoutTimestamp<T>(ref: DocPredicate<T>, data: any): Promise<void> {
    return this.doc(ref).set(
      {
        ...data,
      },
      { merge: true }
    );
  }

  /**
   * adds updatedAt field
   *
   * Usage:
   * db.update('items/ID', data) })
   *
   * @param ref
   * @param data
   * @returns Promise<void>
   */
  update<T>(ref: DocPredicate<T>, data: any): Promise<void> {
    return this.doc(ref).set(this.payloadForUpdate(data), { merge: true });
  }

  updateWithoutTimestamp<T>(ref: DocPredicate<T>, data: any): Promise<void> {
    return this.doc(ref).set(data, { merge: true });
  }

  delete<T>(ref: DocPredicate<T>): Promise<void> {
    return this.doc(ref).delete();
  }

  /**
   * adds createdAt field
   *
   * Usage:
   * db.add('items', data) })
   *
   * @param ref
   * @param data
   * @returns Promise<firebase.firestore.DocumentReference>
   */
  add<T>(ref: CollectionPredicate<T>, data: any): Promise<firebase.firestore.DocumentReference> {
    return this.col(ref).add(this.payloadForSet(data));
  }

  /**
   * Usage:
   * const geopoint = this.db.geopoint(38, -119)
   * return this.db.add('items', { location: geopoint })
   *
   * @param lat
   * @param lng
   * @returns firebase.firestore.GeoPoint
   */
  geopoint(lat: number, lng: number): firebase.firestore.GeoPoint {
    return new firebase.firestore.GeoPoint(lat, lng);
  }

  /**
   * If doc exists update, otherwise set
   *
   * Usage:
   * this.db.upsert('notes/xyz', { content: 'hello dude'})
   *
   * @param ref
   * @param data
   * @returns Promise<any>
   */
  upsert<T>(ref: DocPredicate<T>, data: any): Promise<any> {
    const doc: Promise<any> = this.doc(ref).ref.get();
    return doc.then(
      (snap: firebase.firestore.DocumentSnapshot): any => {
        if (!snap.exists) {
          // use .set with merge true
          return this.doc(ref).set(this.payloadForSet(data), { merge: true });
        } else {
          // Get the entire document
          const rootData: any = snap.data();

          if (hasValue(rootData)) {
            return this.doc(ref).set(this.payloadForUpdate(data), { merge: true });
          } else {
            // use .set with merge true
            return this.doc(ref).set(this.payloadForSet(data), { merge: true });
          }
        }
      }
    );

    // const doc: Promise<any> = this.doc( ref ).snapshotChanges()
    //   .pipe(
    //     take( 1 ),
    //   )
    //   .toPromise();
    //
    // return doc.then( ( snap: any ) => {
    //   return snap.payload.exists ?
    //     this.update( ref, data, nodePath ) :
    //     this.set( ref, data, nodePath );
    // } );
  }

  setIfNotExist<T>(ref: DocPredicate<T>, data: any, checkProp?: any): Promise<any> {
    const doc: Promise<any> = this.doc(ref).ref.get();
    return doc.then(
      (snap: firebase.firestore.DocumentSnapshot): any => {
        if (!snap.exists) {
          return this.set(ref, data);
        } else {
          const _data: any = snap.data();
          if (checkProp) {
            if (!_data[checkProp]) {
              return this.set(ref, data);
            } else {
              return snap;
            }
          }
          return snap;
        }
      }
    );
  }

  /**
   * If doc exists update, otherwise set
   *
   * Usage:
   * this.db.upsert('notes/xyz', { content: 'hello dude'})
   *
   * @param ref
   * @param data
   * @returns Promise<any>
   */
  setMerge<T>(ref: DocPredicate<T>, data: any): Promise<any> {
    const doc: Promise<any> = this.doc(ref).ref.get();
    return doc.then(
      (snap: firebase.firestore.DocumentSnapshot): any => {
        if (!snap.exists) {
          // use .set with merge true
          return this.doc(ref).set(this.payloadForSet(data), { merge: true });
        } else {
          // Get the entire document
          const rootData: any = snap.data();

          if (hasValue(rootData)) {
            return this.doc(ref).set(this.payloadForUpdate(data), { merge: true });
          } else {
            // use .set with merge true
            return this.doc(ref).set(this.payloadForSet(data), { merge: true });
          }
        }
      }
    );

    // const doc: Promise<any> = this.doc( ref ).snapshotChanges()
    //   .pipe(
    //     take( 1 ),
    //   )
    //   .toPromise();
    //
    // return doc.then( ( snap: any ) => {
    //   return snap.payload.exists ?
    //     this.update( ref, data, nodePath ) :
    //     this.set( ref, data, nodePath );
    // } );
  }

  payloadForSet(data: any): any {
    const timestamp: firebase.firestore.FieldValue = this.timestamp;

    const payload: any = {
      ...data,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    return payload;
  }

  payloadForUpdate(data: any): any {
    const timestamp: firebase.firestore.FieldValue = this.timestamp;

    const payload: any = {
      ...data,
      updatedAt: timestamp,
    };

    return payload;
  }

  /// **************
  /// Inspect Data
  /// **************

  /**
   * Usage:
   * this.db.inspectDoc('notes/xyz')
   *
   * @param ref
   */
  inspectDoc(ref: DocPredicate<any>): void {
    const tick: number = new Date().getTime();
    this.doc(ref)
      .snapshotChanges()
      .pipe(
        take(1),
        tap((d: any) => {
          const tock: number = new Date().getTime() - tick;
          console.log(`Loaded Document in ${tock}ms`, d);
        })
      )
      .subscribe();
  }

  /**
   * Usage:
   * this.db.inspectCol('notes')
   *
   * @param ref
   */
  inspectCol(ref: CollectionPredicate<any>): void {
    const tick: number = new Date().getTime();
    this.col(ref)
      .snapshotChanges()
      .pipe(
        take(1),
        tap((c: any) => {
          const tock: number = new Date().getTime() - tick;
          console.log(`Loaded Collection in ${tock}ms`, c);
        })
      )
      .subscribe();
  }

  /// **************
  /// Create and read doc references
  /// **************
  /// create a reference between two documents
  connect(host: DocPredicate<any>, key: string, doc: DocPredicate<any>): Promise<any> {
    return this.doc(host).update({ [key]: this.doc(doc).ref });
  }

  /**
   * returns a documents references mapped to AngularFirestoreDocument
   *
   * Here’s how you would associate an item doc with user doc in Angular.
   *
   * const itemDoc = this.db.doc('items/xyz')
   * const userDoc = this.db.doc('users/jeff')
   *
   * this.db.update({ user: userDoc.ref })
   *
   * I am going to leverage the helper methods from our service in this
   * section. Refer back to section 2 to review how the doc$ helper
   * method works. Here’s how to get the a user Observable if it is
   * referenced on a note document.
   *
   * this.user = this.doc$('items/xyz').switchMap(doc => {
   *   return this.db.doc$(doc.friend.path)
   * })
   *
   * @param ref
   * @returns any
   */
  docWithRefs$<T>(ref: DocPredicate<T>): any {
    return this.doc$(ref).pipe(
      map((doc: any) => {
        for (const k of Object.keys(doc)) {
          if (doc[k] instanceof firebase.firestore.DocumentReference) {
            doc[k] = this.doc(doc[k].path);
          }
        }
        return doc;
      })
    );
  }

  /// **************
  /// Atomic batch example
  /// **************
  /// Just an example, you will need to customize this method.
  atomic(): Promise<void> {
    const batch: firebase.firestore.WriteBatch = firebase.firestore().batch();

    /// add your operations here
    const itemDoc: firebase.firestore.DocumentReference = firebase
      .firestore()
      .doc('items/myCoolItem');
    const userDoc: firebase.firestore.DocumentReference = firebase.firestore().doc('users/userId');
    const currentTime: firebase.firestore.FieldValue = this.timestamp;
    batch.update(itemDoc, { timestamp: currentTime });
    batch.update(userDoc, { timestamp: currentTime });

    /// commit operations
    return batch.commit();
  }

  initialize(): void {
    /* noop */
  }
}
