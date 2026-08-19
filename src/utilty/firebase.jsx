// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 1. 引入 Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "pmtrend.firebaseapp.com",
  projectId: "pmtrend",
  storageBucket: "pmtrend.firebasestorage.app",
  messagingSenderId: "567042671319",
  appId: "1:567042671319:web:681f0d25f4816e596f6692",
  measurementId: "G-DC1N9D3R1M"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app); // 2. 初始化並匯出 Firestore 實例3


