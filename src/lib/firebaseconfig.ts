// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyATgZ3Ifa49BVy7Yo7TAoZdOmL-28t-gDA",
//     authDomain: "generalagents-f8993.firebaseapp.com",
//     databaseURL: "https://generalagents-f8993-default-rtdb.firebaseio.com",
//     projectId: "generalagents-f8993",
//     storageBucket: "generalagents-f8993.firebasestorage.app",
//     messagingSenderId: "560678836746",
//     appId: "1:560678836746:web:84cda659e267c9acea9df3",
//     measurementId: "G-EG0PCF0M0J"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const auth = getAuth(app);

// const googleProvider = new GoogleAuthProvider();


// export { auth, database, googleProvider, signInWithPopup, signOut };

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyATgZ3Ifa49BVy7Yo7TAoZdOmL-28t-gDA",
    authDomain: "generalagents-f8993.firebaseapp.com",
    databaseURL: "https://generalagents-f8993-default-rtdb.firebaseio.com",
    projectId: "generalagents-f8993",
    storageBucket: "generalagents-f8993.firebasestorage.app",
    messagingSenderId: "560678836746",
    appId: "1:560678836746:web:84cda659e267c9acea9df3",
    measurementId: "G-EG0PCF0M0J"

    // apiKey: "AIzaSyCDfopNDd9BlVTJV6sl8WJPBeT_xdWJQFU",
    // authDomain: "forums-app-8e65c.firebaseapp.com",
    // projectId: "forums-app-8e65c",
    // storageBucket: "forums-app-8e65c.firebasestorage.app",
    // messagingSenderId: "706979519595",
    // appId: "1:706979519595:web:57d5727dcf2e79ce7be52e",
    // measurementId: "G-LVX4KF2T3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


export { auth, database, googleProvider, signInWithPopup, signOut, app };



