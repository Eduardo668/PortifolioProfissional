// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIBZVhQbj1q7PGluKCbrBxYdxHwokJDbk",
  authDomain: "portifolio-profissional-47614.firebaseapp.com",
  projectId: "portifolio-profissional-47614",
  storageBucket: "portifolio-profissional-47614.appspot.com",
  messagingSenderId: "643553591226",
  appId: "1:643553591226:web:9832a25a8096a27b732783",
  measurementId: "G-NDJ5KTEWGB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);