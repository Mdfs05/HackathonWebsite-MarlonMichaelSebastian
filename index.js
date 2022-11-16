import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBHyHnN0LdaJvFBCWdbhNRQnWRdZrKavrc",
  authDomain: "realasefewfdf.firebaseapp.com",
  databaseURL: "https://realasefewfdf-default-rtdb.firebaseio.com",
  projectId: "realasefewfdf",
  storageBucket: "realasefewfdf.appspot.com",
  messagingSenderId: "407352769359",
  appId: "1:407352769359:web:e04302a385e0c9d621633a",
  measurementId: "G-NSEHSYLKQS"
};

const app = initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);