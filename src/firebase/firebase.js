import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import config from "./connection";

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Reference to the document
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // Data in the document
  const snapShot = await userRef.get();

  // If data doesn't exist
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      // Populate data
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  // Return doucment reference
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKeys,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKeys);
  const batch = firestore.batch();
  objectsToAdd.forEach((object) => {
    batch.set(collectionRef.doc(), object);
  });
  return await batch.commit();
};

// Exporting auth and firestore documents
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Exporting google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
