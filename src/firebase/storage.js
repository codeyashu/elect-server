import { storage } from './firebase';

// Reference to storage
const storageRef = storage.ref();

export const bjpRef = storageRef.child('images/bjp.png');
export const jdsRef = storageRef.child('images/jds.png');
export const congressRef = storageRef.child('images/congress.png');
