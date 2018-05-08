import { db } from './firebase';

// Create 

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

export async function addConstituency(_cid, _name, _district, _state, _eligible) {
  try {
    await db.collection('Constituency').add({
      cid: _cid,
      name: _name,
      district: _district,
      state: _state,
      eligible: _eligible
    })
    console.log('success add constituency');
  }
  catch (err) {
    console.log('error add constituency:', err);
  }
}

export async function addParty(_pid, _name, _symbol) {
  try {
    await db.collection('Party').add({
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

// Read
export async function getvid(_uid) {
  let docRef = db.collection('User').doc(_uid);
  try {
    let doc = await docRef.get();
    return doc.data().vid;
  } catch (err) {
    console.log('error getting voterID:', err);
  }
}

export async function getConstituency(_vid) {
  let field = "eligible." + _vid;
  let constRef = db.collection("Constituency");
  try {
    let snapshot = await constRef.where(field, "==", true).get();
    for (let doc of snapshot.docs) {
      return doc.data();
    }
  } catch (err) {
    console.log('error getting constituency:', err);
  }
}

export async function getCandidates(_cid) {
  let candRef = db.collection("Candidate");
  let candidates = [];
  try {
    let snapshot = await candRef.where("cid", "==", _cid).get();
    for (let doc of snapshot.docs) {
      candidates.push(doc.data());
    }
    return candidates;
  } catch (err) {
    console.log('error getting candidates:', err);
  }
}

/* async function testgetConstituency () {
  const response = await checkConstituency("vo101");
  console.log(response);
}
test(); */

/* async function testgetCandidates () {
  const response = await getCandidates("c501");
  console.log(response);
}
test();
 */



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
