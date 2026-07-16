// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD8q0wnB893aoDsCeGAskVpR35fc-dlTA",
  authDomain: "vte-content.firebaseapp.com",
  projectId: "vte-content",
  storageBucket: "vte-content.firebasestorage.app",
  messagingSenderId: "1054658314832",
  appId: "1:1054658314832:web:fbd8033d2f566328120755"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);