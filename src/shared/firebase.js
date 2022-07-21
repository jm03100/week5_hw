import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByN8tv8tN4Jv7hw_aPvoVI0zFlMnGJPe8",
  authDomain: "week5-hw.firebaseapp.com",
  projectId: "week5-hw",
  storageBucket: "week5-hw.appspot.com",
  messagingSenderId: "473909361352",
  appId: "1:473909361352:web:bef8591e0968e44a7c43fd",
  measurementId: "G-ZE1G93TBR3"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export {auth, apiKey, firestore, storage};