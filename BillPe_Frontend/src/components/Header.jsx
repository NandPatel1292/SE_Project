import React from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logOutUserAsyncThunk } from "../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logOutUserAsyncThunk());
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/features" className="flex items-center">
            <div className="flex flex-row">
              <div className="w-min text-[#5228f5ff] text-4xl font-bold font-['Inter']">
                BILL
              </div>
              <div className="w-min h-7 text-red-700 text-opacity-80 text-4xl font-bold font-['Inter']">
                PAY
              </div>
            </div>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/dashboard"
              className="text-white bg-[#5228f5ff] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Dashboard
            </Link>
            <Link
              to="/"
              onClick={handleLogout}
              className="text-white bg-[#5228f5ff] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log out
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
