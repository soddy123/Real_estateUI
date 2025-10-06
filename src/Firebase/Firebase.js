// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRj6QsA1DIwSMvAAS4ZyuOGIDunXwnzPo",
  authDomain: "potfolio-31e12.firebaseapp.com",
  projectId: "potfolio-31e12",
  storageBucket: "potfolio-31e12.firebasestorage.app",
  messagingSenderId: "220971666697",
  appId: "1:220971666697:web:41417ac15670c3cb3197d8",
  measurementId: "G-PV1V849P8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);