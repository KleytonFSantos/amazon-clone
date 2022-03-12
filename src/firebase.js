// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyB0KcZ678ejFClc_GuPmgt3YdCOzPeclfQ",
  authDomain: "clallenge-dffb7.firebaseapp.com",
  projectId: "clallenge-dffb7",
  storageBucket: "clallenge-dffb7.appspot.com",
  messagingSenderId: "558123605888",
  appId: "1:558123605888:web:8aba14e476720327efeb65",
  measurementId: "G-FFVHJYTQNM"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
