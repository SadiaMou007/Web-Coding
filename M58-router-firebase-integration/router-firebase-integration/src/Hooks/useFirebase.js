import { useEffect, useState } from "react";

const useFirebase = () => {
  const [user, setUser] = useState({});
  useEffect(() => {}, []);
  const signInWithGoogle = () => {
    console.log("google sign in");
  };
  return { user: user, setUser: setUser, signInWithGoogle: signInWithGoogle };
};

export default useFirebase;
