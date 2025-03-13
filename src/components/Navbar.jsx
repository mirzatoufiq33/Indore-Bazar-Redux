import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutuser } from "../feature/auth/authSlice";
import logo from "../assets/logo.png"

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutuser());
  };

  return (
    <nav className="p-3 bg-[#928dab] shadow-sm flex items-center justify-between">


      {/* Logo */}


        <div className="flex items-center justify-center space-x-1"> 
        <img src={logo} className="w-10 rounded-full" alt="" />
      <Link to={"/"}>
        <h1 className="font-bold  text-xl uppercase text-[#1f1c2c] flex items-center">
          Indore_Bazar
        </h1>
      </Link>
        </div>
        

      {/* Navigation Links */}
      <div className="flex items-center space-x-3">
        {!user ? (
          <>
            <Link
              to={"/login"}
              className="py-1 px-3 rounded-lg bg-[#1f1c2c] font-semibold text-white hover:-translate-y-0.5 transition duration-200"
            >
              Login
            </Link>

            <Link
              to={"/register"}
              className="py-1 px-3 rounded-lg bg-[#1f1c2c] font-semibold text-white hover:-translate-y-0.5 transition duration-200"
            >
              Register
            </Link>
          </>
        ) : (
          <div className="flex space-x-5 items-center">
            {/* 👀 Hidden on Mobile & Tablet | Visible on Desktop */}
            <h2 className="text-xl text-[#1f1c2c] font-semibold hidden lg:flex">
              Hello, {user?.name}👋
            </h2>

            <button
              className="py-1 px-5 rounded-lg bg-[#1f1c2c]  text-white font-semibold hover:bg-red-700 transition duration-200"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
