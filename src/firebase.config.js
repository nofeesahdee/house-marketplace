// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD-K0AVmkid-PUxmytuKI8-iSmevFm3yk",
  authDomain: "house-marketplace-7f4d0.firebaseapp.com",
  projectId: "house-marketplace-7f4d0",
  storageBucket: "house-marketplace-7f4d0.appspot.com",
  messagingSenderId: "8612657818",
  appId: "1:8612657818:web:216acda3b92753a8477d23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()