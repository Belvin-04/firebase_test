// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-nU4Gb_llgk8D0T-vbjEhX64QPgHZzRo",
  authDomain: "book-store-e00fc.firebaseapp.com",
  projectId: "book-store-e00fc",
  storageBucket: "book-store-e00fc.appspot.com",
  messagingSenderId: "587636921598",
  appId: "1:587636921598:web:b3aa83361857cdfb6481af",
  measurementId: "G-PFV40LNDTE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
