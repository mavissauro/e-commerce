import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBrk_bwELK34gLLlTrneLQW1s_xT6GWKjs",
  authDomain: "crown-db-57be1.firebaseapp.com",
  databaseURL: "https://crown-db-57be1.firebaseio.com",
  projectId: "crown-db-57be1",
  storageBucket: "crown-db-57be1.appspot.com",
  messagingSenderId: "1040193822076",
  appId: "1:1040193822076:web:ae628eeced302452c858f9",
  measurementId: "G-CZ7MZD9ZJT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
