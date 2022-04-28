// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkh-LOOoe6AHCggORX3ZJapA0yD0SQdl0",
  authDomain: "quizzomania-d9eee.firebaseapp.com",
  projectId: "quizzomania-d9eee",
  storageBucket: "quizzomania-d9eee.appspot.com",
  messagingSenderId: "53546542049",
  appId: "1:53546542049:web:879be37af05e48d2f6a8a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);