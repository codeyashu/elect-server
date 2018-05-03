import { auth } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
    auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
    auth.currentUser.updatePassword(password);

export const onAuthStateChanged = (user) =>
    auth.onAuthStateChanged(user)

export const user = auth.currentUser;

//auth.onAuthStateChanged(); 

/* auth.onAuthStateChanged(function(user) {
  if (user) {
    console.log('User is signed in.');
  } else {
    console.error('No user is signed in.');
  }
}); */