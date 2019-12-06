import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAwmUkXGww3HbizBrp3IxpSgKgwwntyJX8",
  authDomain: "crwn-db-be60d.firebaseapp.com",
  databaseURL: "https://crwn-db-be60d.firebaseio.com",
  projectId: "crwn-db-be60d",
  storageBucket: "crwn-db-be60d.appspot.com",
  messagingSenderId: "19034912234",
  appId: "1:19034912234:web:15829f92c56ddf90452e93",
  measurementId: "G-3D3D4JNVS6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
