// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDuQmke_YGt5Xq7w-fH_mV3KVaVDQA9Ys",
  authDomain: "shopingapp-f17d8.firebaseapp.com",
  projectId: "shopingapp-f17d8",
  storageBucket: "shopingapp-f17d8.appspot.com",
  messagingSenderId: "696089377841",
  appId: "1:696089377841:web:7619b2a3abdf456f15e910",
  measurementId: "G-EZ96QWQ4ZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth



