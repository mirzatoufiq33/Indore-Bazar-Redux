import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../feature/auth/authSlice";
import { toast } from "react-toastify";
import LoadingPage from "../components/LoadingPage";

const Register = () => {
  const { user, isSuccess, isLoading, isError, message } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !password2) {
      toast.error("❌ Please fill in all fields!", { position: "top-center", theme: "dark" });
      return;
    }

    if (password !== password2) {
      toast.error("❌ Passwords do not match!", { position: "top-center", theme: "dark" });
      return;
    }

    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (user) {
      toast.success("✅ Registration Successful! Redirecting...");
      navigate("/");
    }

    if (isError && message) {
      toast.error(message, {
        position: "top-center",
        theme: "dark",
      });
    }
  }, [user, isError, message, navigate]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="p-5 min-h-screen bg-[#1f1c2c] flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center justify-center bg-[#928dab] rounded-xl w-full max-w-4xl p-6 md:p-10 shadow-lg">
        {/* Left Side - Form */}
        <div className="p-4 w-full md:w-1/2 text-center md:text-left">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-5">Register Here</h2>
          <p className="font-sans mb-6 text-gray-600">Create an account and start your shopping journey with us!</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your Name"
              className="border border-gray-300 w-full p-4 rounded-md placeholder:font-sans placeholder:font-light"
            />

            <input
              name="email"
              value={email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your Email Address"
              className="border border-gray-300 w-full p-4 rounded-md placeholder:font-sans placeholder:font-light"
            />

            <input
              name="password"
              value={password}
              onChange={handleChange}
              type="password"
              placeholder="Enter your Password"
              className="border border-gray-300 w-full p-4 rounded-md placeholder:font-sans placeholder:font-light"
            />

            <input
              name="password2"
              value={password2}
              onChange={handleChange}
              type="password"
              placeholder="Confirm Password"
              className="border border-gray-300 w-full p-4 rounded-md placeholder:font-sans placeholder:font-light"
            />

            <button
              type="submit"
              className="w-full md:w-auto flex justify-center items-center space-x-2 bg-[#1f1c2c] text-white p-3 font-bold rounded-md hover:bg-opacity-90 hover:shadow-lg transform hover:-translate-y-1 transition duration-200"
            >
              <span>Register</span>
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
            src="https://img.freepik.com/premium-vector/virtual-shop-woman-looking-stilettos-internet-footwear-store-girl-with-numerous-bags-hand-looking-smartphone-touchscreen-flat-vector-illustration_776652-2648.jpg"
            className="w-64 md:w-80 rounded-xl hover:scale-105 transition duration-150"
            alt="Register Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
