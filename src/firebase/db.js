import firebase from 'firebase/app';
import 'firebase/firestore';


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyABOjTu0prty8ZRMVGC7w59sqDWKQU-UuE",
    authDomain: "realestate-9c252.firebaseapp.com",
    projectId: "realestate-9c252",
    storageBucket: "realestate-9c252.appspot.com",
    messagingSenderId: "906571719844",
    appId: "1:906571719844:web:3796d4bf7808b45061b231",
    measurementId: "G-SBFT8CFZ0M"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.5.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.5.0/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
// firebase login
// firebase init
// firebase deploy