// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Paste your Firebase config here
const firebaseConfig = {
    apiKey: "AIzaSyDRA2E0qeQ-mtoymRe0NhgSb05_khrBo6M",
    authDomain: "test-project-e0673.firebaseapp.com",
    projectId: "test-project-e0673",
    storageBucket: "test-project-e0673.firebasestorage.app",
    messagingSenderId: "1070890670987",
    appId: "1:1070890670987:web:c55ad2dbc34ab657602d8e",
    measurementId: "G-939SS2B8RP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };