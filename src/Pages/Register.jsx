import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const {createNewUser,setUser} = useContext(AuthContext)
  const handleSubmit= (e)=> {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log({name,email,photo,password});
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
      });
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Register your account
        </h2>

        <form onSubmit={handleSubmit} action="">
          <div className="mb-4">
            <label className="block text-sm font-medium">Your Name</label>
            <input
              name="name"
              type="text"
              className="w-full p-3 border rounded-md mt-1"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="w-full p-3 border rounded-md mt-1"
              placeholder="Enter your photo URL"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              className="w-full p-3 border rounded-md mt-1"
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              name="password"
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
        </form>
      </div>
    </div>
  );
};

export default Register;
