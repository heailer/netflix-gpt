// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTpCNz85DFpYfL1itr427A9mfDk_Zbk5Y",
  authDomain: "netflixgpt-36038.firebaseapp.com",
  projectId: "netflixgpt-36038",
  storageBucket: "netflixgpt-36038.firebasestorage.app",
  messagingSenderId: "775981872449",
  appId: "1:775981872449:web:92ff8383c05a7bf794ddc0",
  measurementId: "G-876JJ900S6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
