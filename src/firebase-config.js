import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClT9H6iSQ98oHYVll9VbyqRLEYnRNAAvA",
  authDomain: "signup-practice-1b8d0.firebaseapp.com",
  projectId: "signup-practice-1b8d0",
  storageBucket: "signup-practice-1b8d0.appspot.com",
  messagingSenderId: "418445975106",
  appId: "1:418445975106:web:7b9048f1f1dae6e115d7db",
  measurementId: "G-LZ2R633F57",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
