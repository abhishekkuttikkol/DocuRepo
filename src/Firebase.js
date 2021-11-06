// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const App = firebase.initializeApp({
  apiKey: "AIzaSyDUpji-O-Jt97ZfrFmcl6iTwWIUGu5Gukc",
  authDomain: "docurepo.firebaseapp.com",
  projectId: "docurepo",
  storageBucket: "docurepo.appspot.com",
  messagingSenderId: "677621859640",
  appId: "1:677621859640:web:98bd3daa30afef9b3e6dcd",
});

// Initialize Firebase
const db = App.firestore();
export { App, db };
