// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXsNJpLBEpkmAKA-_4KJWCCVlurfhQcY8",
  authDomain: "i18n-demo-opt3.firebaseapp.com",
  databaseURL:
    "https://i18n-demo-opt3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "i18n-demo-opt3",
  storageBucket: "i18n-demo-opt3.appspot.com",
  messagingSenderId: "752479766266",
  appId: "1:752479766266:web:1f20ffebb6679915d72b43",
  measurementId: "G-8S7Y5XQZP3",  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
