// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrcX00QYnR48wA3fyBf32XB5hZY9dse5U",
  authDomain: "netflix-3e3a4.firebaseapp.com",
  projectId: "netflix-3e3a4",
  storageBucket: "netflix-3e3a4.appspot.com",
  messagingSenderId: "233404332766",
  appId: "1:233404332766:web:5c801c2b4452650598204f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
