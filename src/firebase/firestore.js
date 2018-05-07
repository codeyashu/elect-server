import { db } from './firebase';

export async function addUser(_uid, _vid, _eid) {
  try {
    await db.collection('User').doc(_uid).set({
      uid: _uid,
      vid: _vid,
      email: _eid
    })
    console.log('success addUser');
  }
  catch (err) {
    console.log('error addUser:', err);
  }
}

export async function addCandidate(_nid, _cid, _name, _party) {
  try {
    await db.collection('Candidate').add({
      nid: _nid,
      cid: _cid,
      name: _name,
      party: _party
    })
    console.log('success add candidate');
  }
  catch (err) {
    console.log('error add candidate:', err);
  }
}

export async function addConstituency(_cid, _name, _district, _state, eligible) {
  try {
    await db.collection('constituency').add({
      cid: _cid,
      name: _name,
      district: _district,
      state: _state,
      eligible: eligible
    })
    console.log('success add constituency');
  }
  catch (err) {
    console.log('error add constituency:', err);
  }
}

export async function addParty(_pid, _name, _symbol) {
  try {
    await db.collection('party').add({
      pid: _pid,
      name: _name,
      symbol: _symbol
    })
    console.log('success add party');
  }
  catch (err) {
    console.log('error add Party:', err);
  }
}

// Get constituency

/* db.collection("Constituency").where("eligible.vo101", "==", true)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log("document:", doc.data());
    });
  })
  .catch((err) => {
    console.log("error getting document:", err);
  });
 */
export async function checkConstituency(_vid) {
  let field = "eligible."+_vid;
  let constRef = db.collection("Constituency");
  try {
    let snapshot = await constRef.where(field, "==", true).get();
    for (let doc of snapshot.docs) {
      return doc.data();
    }
  }
  catch (err) {
    console.log('error getting constituency:', err);
  }
}

/* async function test () {
  const response = await checkConstituency("vo101");
  console.log(response);
}
test(); */

export async function getCandidates() {
  let candRef = db.collection("Candidates");
  try {
    let snapshot = await candRef.where("party", "==", "bjp").get();
    for (let doc of snapshot.docs) {
      console.log(doc.data());
    }
  }
  catch (err) {
    console.log('error getting constituency:', err);
  }
}

getCandidates();