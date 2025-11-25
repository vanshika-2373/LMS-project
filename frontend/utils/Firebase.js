import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "lms-project-10192.firebaseapp.com",
  projectId: "lms-project-10192",
  storageBucket: "lms-project-10192.firebasestorage.app",
  messagingSenderId: "1048970575920",
  appId: "1:1048970575920:web:6383dc4069344cb7c2edf5",
  measurementId: "G-B8JPSX7SPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}
