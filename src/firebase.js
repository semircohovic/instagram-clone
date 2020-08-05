import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAHQW7fVXN7uwxduoP8iBFfNYdawarrc2E",
  authDomain: "instagram-clone-b461f.firebaseapp.com",
  databaseURL: "https://instagram-clone-b461f.firebaseio.com",
  projectId: "instagram-clone-b461f",
  storageBucket: "instagram-clone-b461f.appspot.com",
  messagingSenderId: "604949329958",
  appId: "1:604949329958:web:b7c267da8055af57c00ee7",
  measurementId: "G-88GGQ08NZP"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {
  db,
  auth,
  storage
};