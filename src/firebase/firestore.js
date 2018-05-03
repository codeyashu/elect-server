//Add data to firestore

import { firebase, db } from './fire';

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