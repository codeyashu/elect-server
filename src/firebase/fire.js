//Initialize Firebase
import * as firebase from "firebase";
import 'firebase/firestore';
var config = {
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

//Add data to firestore
export async function addConstituency(id, name, district, state) {
    try {
        await db.collection('constituency').add({
            id: id,
            name: name,
            district: district,
            state: state
        })
        console.log('success addConstituency:');
    }
    catch (err) {
        console.log('error addConstituency:', err);
    }
}

export async function addElectoral(eid, cid) {
    try {
        await db.collection('electoral').add({
            election_id: eid,
            constituency_id: cid
        })
        console.log('success addElectoral:');
    }
    catch (err) {
        console.log('error addElectoral:', err);
    }
}

export async function addParty(id, name, symbol) {
    try {
        await db.collection('party').add({
            id: id,
            name: name,
            symbol: symbol
        })
        console.log('success addParty:');
    }
    catch (err) {
        console.log('error addParty:', err);
    }
}

export async function addPolitician(id, name, pid) {
    try {
        await db.collection('Politician').add({
            id: id,
            name: name,
            party_id: pid
        })
        console.log('success addPolitician:');
    }
    catch (err) {
        console.log('error addPolitician:', err);
    }
}

export async function addCandidate(cid, pid) {
    try {
        await db.collection('Candidate').add({
            cid: cid,
            pid: pid
        })
        console.log('success addCandidate:');
    }
    catch (err) {
        console.log('error addCandidate:', err);
    }
}