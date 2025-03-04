import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyATgZ3Ifa49BVy7Yo7TAoZdOmL-28t-gDA",
    authDomain: "generalagents-f8993.firebaseapp.com",
    databaseURL: "https://generalagents-f8993-default-rtdb.firebaseio.com",
    projectId: "generalagents-f8993",
    storageBucket: "generalagents-f8993.firebasestorage.app",
    messagingSenderId: "560678836746",
    appId: "1:560678836746:web:84cda659e267c9acea9df3",
    measurementId: "G-EG0PCF0M0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();



export { database, auth, firestore, googleProvider };