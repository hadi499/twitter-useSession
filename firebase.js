// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-2f4b6.firebaseapp.com",
  projectId: "twitter-2f4b6",
  storageBucket: "twitter-2f4b6.appspot.com",
  messagingSenderId: "160339621107",
  appId: "1:160339621107:web:f3ae9bbdacf4b32a623386",
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
