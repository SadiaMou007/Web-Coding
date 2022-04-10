import React from "react";

const Register = () => {
  return (
    <div className="">
      <div className="p-5 my-8 text-cyan-600">
        <h2 className="text-2xl text-center my-3 text-cyan-600 font-bold">
          Register
        </h2>
        <form className="w-3/4 border-2 border-gray-100 rounded py-5 px-8 mx-auto md:w-1/2">
          <div className="my-3 grid grid-cols-2 ">
            <div>
              <label htmlFor="name">First Name</label>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="First name"
                  className="border-2 border-gray-100 w-full p-2 rounded"
                />
              </div>
            </div>
            <div className="ml-2">
              <label htmlFor="name">Last Name</label>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="last name"
                  className="border-2 border-gray-100 w-full p-2 rounded"
                />
              </div>
            </div>
          </div>
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
            >
              Sign Up Using Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
