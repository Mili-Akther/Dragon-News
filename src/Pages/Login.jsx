import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {userLogin, setUser} = useContext(AuthContext);
  const [error,setError] = useState({})
  const location = useLocation();
  const navigate = useNavigate()
  // console.log(location);
  const handleSubmit = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password);
    userLogin(email,password).then((result)=>{
      const user = result.user;
      setUser(user);
      navigate(location?.state?location.state:"/")
      
    })
    .catch((err) => {
   setError({...error, login:err.code})
  });

  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Login your account
        </h2>
        <hr className="mb-6" />

        <form onSubmit={handleSubmit} action="">
          <div className="mb-4">
            <label className="block text-sm font-medium">Email address</label>
            <input
              name="email"
              type="email"
              className="w-full p-3 border rounded-md mt-1"
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium">Password</label>
            <input
              name="password"
              type="password"
              className="w-full p-3 border rounded-md mt-1"
              placeholder="Enter your password"
            />
          </div>
          {error.login && <label className="label flex text-sm text-red-600">{error.login}</label>}

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot Password?
            </a>
          </label>

          <button className="w-full bg-black text-white py-3 rounded-md">
            Login
          </button>

          <p className="text-center text-sm mt-4">
            Don’t Have An Account?{" "}
            <Link to="/auth/register" className="text-red-500 font-medium">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
