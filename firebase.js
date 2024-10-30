// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABOjTu0prty8ZRMVGC7w59sqDWKQU-UuE",
  authDomain: "realestate-9c252.firebaseapp.com",
  projectId: "realestate-9c252",
  storageBucket: "realestate-9c252.appspot.com",
  messagingSenderId: "906571719844",
  appId: "1:906571719844:web:3796d4bf7808b45061b231",
  measurementId: "G-SBFT8CFZ0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);