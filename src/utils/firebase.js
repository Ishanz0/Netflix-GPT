// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABsn_ulpifa9AHiPvI8AY4uS4NFDQN-yM",
  authDomain: "netflix-gpt-b5522.firebaseapp.com",
  projectId: "netflix-gpt-b5522",
  storageBucket: "netflix-gpt-b5522.appspot.com",
  messagingSenderId: "986637692895",
  appId: "1:986637692895:web:695aec067b23bc00dd9e6a",
  measurementId: "G-H6QNXLTR83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();