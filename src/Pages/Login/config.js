import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCedLFfYzVY7xx8aJiNm0PpQzv9TqWDThg",
  authDomain: "astro-9bf0d.firebaseapp.com",
  projectId: "astro-9bf0d",
  storageBucket: "astro-9bf0d.appspot.com",
  messagingSenderId: "260445857287",
  appId: "1:260445857287:web:3a1261a84d20032258aca2",
  measurementId: "G-P8X6V4PYSX"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};
