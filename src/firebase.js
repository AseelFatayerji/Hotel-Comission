// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "lopinn-37bc3.firebaseapp.com",
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: "lopinn-37bc3.firebasestorage.app",
  messagingSenderId: "120785346542",
  appId: import.meta.env.VITE_APP_ID,
  measurementId: "G-7WBBCX1X4G",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const booking = getFirestore(app);