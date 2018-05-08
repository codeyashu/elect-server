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

// Auth Listener
export const onAuthStateChanged = (user) =>
  auth.onAuthStateChanged(user);

// export const user = auth.currentUser;


/* export const user = () => {
  auth.onAuthStateChanged((user) => user
}
 */
/* export async function getUser() {
  try {
    await auth.onAuthStateChanged((user) => {
      if(user) {
        return user;
      }
    })
  }
  catch (err) {
    console.log('auth user auth.js:', err);
  }
} */