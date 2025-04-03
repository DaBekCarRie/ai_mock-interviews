import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANgVGMjdNd0lVTbZcogv63ZVYTI1rajQ0",
  authDomain: "prepwise-7e02c.firebaseapp.com",
  projectId: "prepwise-7e02c",
  storageBucket: "prepwise-7e02c.firebasestorage.app",
  messagingSenderId: "154849159659",
  appId: "1:154849159659:web:78e48b6210561dee1f91ae",
  measurementId: "G-ESWRT8NVMN",
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app)
export const db = getFirestore(app)