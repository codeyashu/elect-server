import * as firebase from "firebase";
import 'firebase/firestore';

const prodConfig = {
  apiKey: "AIzaSyDRhP3ssGKF86sacpLsfYxrgrv14bD13Bg",
  authDomain: "goelect-a0745.firebaseapp.com",
  databaseURL: "https://goelect-a0745.firebaseio.com",
  projectId: "goelect-a0745",
  storageBucket: "goelect-a0745.appspot.com",
  messagingSenderId: "521705883343"
};

var devConfig = {
  apiKey: "AIzaSyDJLwrn_1BOAkVA-Cj_M8jVAPvzImtd6PM",
  authDomain: "go-elect-dev.firebaseapp.com",
  databaseURL: "https://go-elect-dev.firebaseio.com",
  projectId: "go-elect-dev",
  storageBucket: "go-elect-dev.appspot.com",
  messagingSenderId: "723812105098"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

//Initialize firestore and its time settings
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

//Authentication
const auth = firebase.auth();

export {
  db,
  auth,
};