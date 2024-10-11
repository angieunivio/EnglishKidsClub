// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAC9ZpXpNiXxiiBhBoK-HRyCzBVumCGXDQ",
  authDomain: "english-kids-club.firebaseapp.com",
  projectId: "english-kids-club",
  storageBucket: "english-kids-club.appspot.com",
  messagingSenderId: "692506425421",
  appId: "1:692506425421:web:310d0e90aa99cf7e794404",
  measurementId: "G-KBD5NC21WN"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);