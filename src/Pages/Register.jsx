import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Register your account
        </h2>
        <hr className="mb-6" />

        <div className="mb-4">
          <label className="block text-sm font-medium">Your Name</label>
          <input
            type="text"
            className="w-full p-3 border rounded-md mt-1"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Photo URL</label>
          <input
            type="text"
            className="w-full p-3 border rounded-md mt-1"
            placeholder="Enter your photo URL"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-md mt-1"
            placeholder="Enter your email address"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full p-3 border rounded-md mt-1"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center gap-2 mb-6">
          <input type="checkbox" className="w-4 h-4" />
          <label className="text-sm">
            Accept <span className="font-semibold">Term & Conditions</span>
          </label>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-md">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
