// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMCRvLrQRii3OGQ0Eej5n1WtSMISbfN84",
  authDomain: "emai-pass-auth.firebaseapp.com",
  projectId: "emai-pass-auth",
  storageBucket: "emai-pass-auth.appspot.com",
  messagingSenderId: "401760145529",
  appId: "1:401760145529:web:e987d28048271b88edc4a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
