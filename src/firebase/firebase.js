// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXaLbPIejxRXbt-ic7wJSj0bIqM78XdBg",
  authDomain: "ecommerce-react-lustres-3f092.firebaseapp.com",
  projectId: "ecommerce-react-lustres-3f092",
  storageBucket: "ecommerce-react-lustres-3f092.appspot.com",
  messagingSenderId: "756247283844",
  appId: "1:756247283844:web:893c2cf121da2560599ad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)