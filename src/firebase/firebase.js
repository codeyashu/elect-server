//Initialize Firebase
import * as firebase from "firebase";
import 'firebase/firestore';
const config = {
    apiKey: "AIzaSyDRhP3ssGKF86sacpLsfYxrgrv14bD13Bg",
    authDomain: "goelect-a0745.firebaseapp.com",
    databaseURL: "https://goelect-a0745.firebaseio.com",
    projectId: "goelect-a0745",
    storageBucket: "goelect-a0745.appspot.com",
    messagingSenderId: "521705883343"
};
firebase.initializeApp(config);

//Initialize firestore and its time settings
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

/* With this change, timestamps stored in Cloud Firestore will be read back as
Firebase Timestamp objects instead of as system Date objects. So you will also
need to update code expecting a Date to instead expect a Timestamp. For example:

  // Old:
  const date = snapshot.get('created_at');
  // New:
  const timestamp = snapshot.get('created_at');
  const date = timestamp.toDate(); */

//Authentication
const auth = firebase.auth();

export { 
  db,
  auth,
};