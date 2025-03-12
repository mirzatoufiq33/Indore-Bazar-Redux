import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../feature/auth/authSlice";
import { toast } from "react-toastify";
import LoadingPage from "../components/LoadingPage";
import loginimage from "../assets/login.png"

const Login = () => {
  const { user, isSuccess, isLoading, isError, message } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("❌ Please fill in all fields!");
      return;
    }

    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (isSuccess || user) {
      toast.success("✅ Logged in Successfully!");
      navigate("/");
    }

    if (isError) {
      if (message?.toLowerCase().includes("invalid") || message?.toLowerCase().includes("incorrect")) {
        toast.error("❌ Invalid Email or Password!");
      } else {
        toast.error(message || "❌ Login Failed! Please try again.");
      }
    }
  }, [user, isSuccess, isError, message, navigate]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="p-5 min-h-screen bg-[#1f1c2c] flex justify-center items-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center rounded-xl space-y-6 md:space-y-0 md:space-x-10 bg-[#928dab] w-full max-w-4xl p-6 md:p-10 shadow-lg">
        {/* Left Side - Form */}
        <div className="p-4 w-full md:w-1/2 text-center md:text-left">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-5">Login Here</h2>
          <p className="font-sans mb-6 text-gray-600">Log in to Your Account to Enjoy a Personalized Shopping Experience!</p>

          <form onSubmit={handleSubmit} className="space-y-4">
             <input
              name="email"
              value={email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your Email Address"
              className=" bg-transparent border border-[#1f1c2c] placeholder:text-[#1f1c2c] focus:outline-none focus:bg-transparent w-full p-3 rounded-md placeholder:font-sans placeholder:font-bold"
            /> 


            <input
              name="password"
              value={password}
              onChange={handleChange}
              type="password"
              placeholder="Enter your Password"
              className=" bg-transparent border border-[#1f1c2c] placeholder:text-[#1f1c2c] focus:outline-none focus:bg-transparent w-full p-3 rounded-md placeholder:font-sans placeholder:font-bold"
            />

            <button
              type="submit"
              className="w-full md:w-auto flex justify-center items-center space-x-2 bg-[#1f1c2c] text-white p-3 font-bold rounded-md hover:bg-opacity-90 hover:shadow-lg transform hover:-translate-y-1 transition duration-200"
            >
              <span>Login</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 pt-1"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={loginimage}
            className="w-64 md:w-auto  hover:scale-110 transition duration-150"
            alt="Login Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
