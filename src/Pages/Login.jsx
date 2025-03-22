import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Login your account
        </h2>
        <hr className="mb-6" />

        <div className="mb-4">
          <label className="block text-sm font-medium">Email address</label>
          <input
            type="email"
            className="w-full p-3 border rounded-md mt-1"
            placeholder="Enter your email address"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full p-3 border rounded-md mt-1"
            placeholder="Enter your password"
          />
        </div>

        <button className="w-full bg-black text-white py-3 rounded-md">
          Login
        </button>

        <p className="text-center text-sm mt-4">
          Don’t Have An Account?{" "}
          <Link to='/auth/register' className="text-red-500 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
