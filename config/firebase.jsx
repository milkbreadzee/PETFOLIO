import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/app";
import "firebase/database";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
import { getDatabase } from "firebase/database";




const firebaseConfig = {
  apiKey: "AIzaSyCxGj3xn2sotoGae_Y_oljPMamvKNSvrIY",
  authDomain: "technohack-e82b9.firebaseapp.com",
  projectId: "technohack-e82b9",
  storageBucket: "technohack-e82b9.appspot.com",
  messagingSenderId: "629601086038",
  appId: "1:629601086038:web:1d5041e23024be782fe9f7",
  measurementId: "G-JJX6CQEKP0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const db = getDatabase();
