import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useFirebase = () => {
  //
  const [user, setUser] = useState({});
  //
  const handleSignOut = () => {
    signOut(auth).then(() => {});
  };
  //
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  //
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  return { user, signInWithGoogle, handleSignOut };
};

export default useFirebase;
