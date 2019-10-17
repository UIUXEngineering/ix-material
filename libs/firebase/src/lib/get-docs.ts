import * as firebase from 'firebase/app';

export function getFirestoreDocs<T>(querySnapshot: firebase.firestore.QuerySnapshot): T[] {
  if (querySnapshot && querySnapshot.docs && querySnapshot.docs.length) {
    return querySnapshot.docs.map((doc: firebase.firestore.QueryDocumentSnapshot) => {
      return <T>doc.data();
    });
  } else {
    return [];
  }
}
