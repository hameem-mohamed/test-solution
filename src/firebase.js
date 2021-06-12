import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDbRnldKCzwZFsIWfClAaakHEabnhSMZM8",
  authDomain: "react--clone-a5e83.firebaseapp.com",
  projectId: "react--clone-a5e83",
  storageBucket: "react--clone-a5e83.appspot.com",
  messagingSenderId: "31321259288",
  appId: "1:31321259288:web:24788c0ff6ff026877326d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };