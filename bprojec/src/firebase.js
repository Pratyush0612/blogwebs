// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogwebsi.firebaseapp.com",
  projectId: "blogwebsi",
  storageBucket: "blogwebsi.appspot.com",
  messagingSenderId: "488514347709",
  appId: "1:488514347709:web:2fd99815b43370f1060dd4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 