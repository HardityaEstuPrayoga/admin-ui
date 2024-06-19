import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-1e5c0.firebaseapp.com",
  projectId: "store-tutorial-1e5c0",
  storageBucket: "store-tutorial-1e5c0.appspot.com",
  messagingSenderId: "539478662984",
  appId: "1:539478662984:web:a5eea9be0ef5aefda39d7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);