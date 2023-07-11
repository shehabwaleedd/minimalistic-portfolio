
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTiYXKijf8IhZloQnf5-zDj08IYgEu6Xo",
  authDomain: "myblog-c2d41.firebaseapp.com",
  projectId: "myblog-c2d41",
  storageBucket: "myblog-c2d41.appspot.com",
  messagingSenderId: "1063354066683",
  appId: "1:1063354066683:web:0cd0a9417a14ad293cf25e",
  measurementId: "G-N8L8B7WPSP"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);

