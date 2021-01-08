import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD9K7X3spO8yyyCkVfASoxYRSuG1tpphWs",
  authDomain: "clone-yt-c9f55.firebaseapp.com",
  projectId: "clone-yt-c9f55",
  storageBucket: "clone-yt-c9f55.appspot.com",
  messagingSenderId: "1043266538589",
  appId: "1:1043266538589:web:57e0aff5d3c3e9f7f951b4",
  measurementId: "G-7GPCB0HZ6Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth};