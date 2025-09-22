// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy4YV4Z15f5k6k_EUuKKqw2TjEK1n3lMk",
  authDomain: "u-tube-aba7f.firebaseapp.com",
  projectId: "u-tube-aba7f",
  storageBucket: "u-tube-aba7f.firebasestorage.app",
  messagingSenderId: "258161565036",
  appId: "1:258161565036:web:6e4ada05b350d8a95c2749",
  measurementId: "G-B6RRPE47S1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);

