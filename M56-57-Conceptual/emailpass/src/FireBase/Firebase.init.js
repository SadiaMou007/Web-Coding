import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfwbhzy2ZupBGNQwASAr48g2Nz6eXs2jc",
  authDomain: "email-pass-auth-conceptual.firebaseapp.com",
  projectId: "email-pass-auth-conceptual",
  storageBucket: "email-pass-auth-conceptual.appspot.com",
  messagingSenderId: "926079439009",
  appId: "1:926079439009:web:e1ebde087aa0a1af4460e0",
};

const app = initializeApp(firebaseConfig);

// 2
export const auth = getAuth(app);

export default app;
