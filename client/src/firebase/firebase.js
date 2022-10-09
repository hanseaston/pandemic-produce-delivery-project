/**
 * @Libraries
 */

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import firebaseConfig from "../config/firebase_key";

/**
 * Initialize firebase
 */

initializeApp(firebaseConfig);

export const firestore = getFirestore();

/**
 *
 * @param user the User object from firebase
 * @param additionalData any additionalData passed in
 * @param additionalData[0] boolean value of whether the user is previleged or not
 * @returns firebase document reference to the user document
 */
export const createUserProfileDocument = async (user, additionalData) => {
  // If user is null
  if (user === null) throw new Error("user passed in shouldn't be null");

  // TODO: might want to add the Google account's profile pic!
  // const profilePic = user.photoURL;

  // Will implement the above feature soon - Jona Brown (SorviusN)

  // Reference to the document
  const userRef = firestore.doc(`users/${user.uid}`);

  // Check whether user document exists
  const snapShot = await userRef.get();

  // If data doesn't exist
  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      // Populate data
      await userRef.set({
        displayName,
        email,
        createdAt,
        privilege: additionalData[0],
      });
    } catch (error) {
      //TODO: want to show a pop-window rather than simply doing alert
      alert("error creating user", error.message);
      throw error;
    }
  }
  // Return doucment reference
  return userRef;
};

export const checkUserIsAuthenticated = async (user) => {
  // If user is null
  if (user === null) throw new Error("user passed in shouldn't be null");

  // Reference to the document
  const userRef = firestore.doc(`users/${user.uid}`);

  // Check whether user document exists
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    throw new Error("user should already be created and stored in the store");
  } else {
    return snapShot.get("privilege");
  }
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

export const convertProductsToMap = (snapshot) => {
  const products = snapshot.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return products.reduce((accumulator, product) => {
    accumulator[product.title.toLowerCase()] = product;
    return accumulator;
  }, {});
};

// Exporting auth and firestore documents
export const auth = getAuth();

// Exporting google auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
