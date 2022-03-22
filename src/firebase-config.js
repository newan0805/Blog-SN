// require('dotenv').config();
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "blog-a1325.firebaseapp.com",
  projectId: "blog-a1325",
  storageBucket: "blog-a1325.appspot.com",
  messagingSenderId: "211432589763",
  appId: process.env.REACT_APP_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const storage = getStorage(app)