// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBy6AQKxyq3o63cNY43s1Lnext7aQVVHBo",
  authDomain: "facebook-clone-app-4fe59.firebaseapp.com",
  projectId: "facebook-clone-app-4fe59",
  storageBucket: "facebook-clone-app-4fe59.appspot.com",
  messagingSenderId: "111803351395",
  appId: "1:111803351395:web:74bc243943661cc9d85356",
  measurementId: "G-K9JB7GGMGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export {db}
