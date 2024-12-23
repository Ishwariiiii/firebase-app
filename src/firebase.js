import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDPxz6ZgFHw4aDAig-T1AkretwqKIKjXyA",
    authDomain: "fir-practice-project-c28fb.firebaseapp.com",
    projectId: "fir-practice-project-c28fb",
    storageBucket: "fir-practice-project-c28fb.firebasestorage.app",
    messagingSenderId: "801527401892",
    appId: "1:801527401892:web:f0f0ac039cf85242e34531",
    measurementId: "G-NZ4FN95CGB"
  };
// Initialize Firebase project
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the auth service
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
