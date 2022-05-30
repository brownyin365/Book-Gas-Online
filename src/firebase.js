import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";


  // Your web app's Firebase configuration Reservation confg
  var config = {
    apiKey: "AIzaSyB2TVVrGBOf2tQTPSYHWQogoiJeSICC910",
    authDomain: "reservations-119f9.firebaseapp.com",
    projectId: "reservations-119f9",
    storageBucket: "reservations-119f9.appspot.com",
    messagingSenderId: "914432206096",
    appId: "1:914432206096:web:fd6c42e5be4ee7128cb195",
    measurementId: "G-M4RR555WVS"
    };
  // Initialize Firebase
const fb = firebase.initializeApp(config);
const db = firebase.firestore();


export {fb,db}

