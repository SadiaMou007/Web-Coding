import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div className="">
      <div className="p-5 my-8 text-cyan-600">
        <h2 className="text-2xl text-center my-3 text-cyan-600 font-bold">
          Login
        </h2>
        <div className="w-3/4 border-2 border-gray-100 rounded py-5 px-8 mx-auto md:w-1/2">
          <div className="my-3">
            <label htmlFor="email">Email</label>
            <div>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="border-2 border-gray-100 w-full p-2 rounded"
              />
            </div>
          </div>
          <div className="my-3">
            <label htmlFor="password">Password</label>
            <div>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="border-2 border-gray-100 w-full p-2 rounded"
              />
            </div>
          </div>
          <div className="my-5">
            <button
              type="submit"
              className=" bg-cyan-500 font-bold w-full p-2 rounded text-white hover:bg-cyan-600 "
            >
              Sign Up
            </button>
          </div>
          <div className="my-5">
            <hr></hr>
          </div>
          <div className="my-5">
            <button
              type="submit"
              className=" bg-blue-500 font-bold w-full p-2 rounded text-white hover:bg-blue-600 "
              onClick={signInWithGoogle}
            >
              Sign Up Using Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
