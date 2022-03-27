// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVAt6imDQioQpBSxWMxFp0XswcoRmphfs",
  authDomain: "schedule-fb173.firebaseapp.com",
  projectId: "schedule-fb173",
  storageBucket: "schedule-fb173.appspot.com",
  messagingSenderId: "691770538211",
  appId: "1:691770538211:web:d9ee8cd5805f89aa3aedd6",
  measurementId: "G-Z6HHC4XJVC"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore();

export { firebase, auth, db }