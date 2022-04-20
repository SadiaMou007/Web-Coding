import React from "react";

import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  if (loading) {
    <Loading></Loading>;
  }
  if (!user.emailVerified) {
    return (
      <div>
        <h2>Not verified your email</h2>
        <button
          onClick={async () => {
            await sendEmailVerification();
            alert("Sent email");
          }}
        >
          Verify email
        </button>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
