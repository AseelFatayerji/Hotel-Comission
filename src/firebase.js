// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "lopinn-37bc3.firebaseapp.com",
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: "lopinn-37bc3.firebasestorage.app",
  messagingSenderId: "120785346542",
  appId: import.meta.env.VITE_APP_ID,
  measurementId: "G-7WBBCX1X4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);