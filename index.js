import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCZ5PEnk7cXzzpEwv8jLECV6_S2RUvTiUA",
  authDomain: "november16-141af.firebaseapp.com",
  databaseURL: "https://november16-141af-default-rtdb.firebaseio.com",
  projectId: "november16-141af",
  storageBucket: "november16-141af.appspot.com",
  messagingSenderId: "334652918120",
  appId: "1:334652918120:web:c3f175ab56295723d7eedd",
  measurementId: "G-LG45SXGG2W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);
  
  set(reference, {
    username: name,
    email: email, 
    profile_picture: imageUrl
  });
}

writeUserData("testnameforme", "name", "emailtest.com", "myimageurl");