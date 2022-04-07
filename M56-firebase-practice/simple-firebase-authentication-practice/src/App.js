import "./App.css";
import { useState } from "react";
import app from "./firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleG = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      });
  };

  return (
    <div className="App">
      <button onClick={handleG}>sign in with google</button>
      <button onClick={handleSignOut}>sign Out</button>
      <h2>Name:{user.email}</h2>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
