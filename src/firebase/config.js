import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFUqFnZKs-rcY4hVBpX_fgQYdYU-p8gjs",
  authDomain: "chat-app-7637a.firebaseapp.com",
  projectId: "chat-app-7637a",
  storageBucket: "chat-app-7637a.appspot.com",
  messagingSenderId: "121971591328",
  appId: "1:121971591328:web:ba2918a253917588fee1c5",
  measurementId: "G-TTQG3EB8ZV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
   auth.useEmulator('http://localhost:9099');
   db.useEmulator('localhost', '5000');
}

export { db, auth };
export default firebase;
