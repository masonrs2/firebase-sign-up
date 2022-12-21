// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkYdYJhJZLj7UyWn5LgDAQYgR2Mf4C5JM",
  authDomain: "sign-up-9d172.firebaseapp.com",
  projectId: "sign-up-9d172",
  storageBucket: "sign-up-9d172.appspot.com",
  messagingSenderId: "614199088514",
  appId: "1:614199088514:web:678446eb31ec50e5562b9b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);