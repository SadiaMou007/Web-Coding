// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADvQTVttpTj5d4WzKH0uDt-9Tx7S5HrEA",
  authDomain: "genius-car-service-new.firebaseapp.com",
  projectId: "genius-car-service-new",
  storageBucket: "genius-car-service-new.appspot.com",
  messagingSenderId: "585270498750",
  appId: "1:585270498750:web:d84dfb140b4a92044995ef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
