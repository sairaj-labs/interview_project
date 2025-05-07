// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDh-0VZbsnmA8yF_Um2kRm8AiwvLJXer40",
    authDomain: "prepwise-914b2.firebaseapp.com",
    projectId: "prepwise-914b2",
    storageBucket: "prepwise-914b2.firebasestorage.app",
    messagingSenderId: "634349316727",
    appId: "1:634349316727:web:01c3aa96da4e760b543472",
    measurementId: "G-WTC1BFC0QR"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);