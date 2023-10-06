import React, { useState } from "react";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";


const Header = () => {
  const [fold, setFold] = useState(false);
  return (
    <div className="bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex justify-between relative">
      <Link to='/'>
        <div className="flex items-center">
          <BoltIcon className="h-6 w-6 text-blue-600"></BoltIcon>
          <h1 className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            nextPage
          </h1>
        </div>
      </Link>
      <div>
        <div className="md:flex hidden space-x-5">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/books"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Books
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </div>
        {/* for mobile device */}
        <div className="md:hidden">
          <button onClick={() => setFold(true)}>
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {fold && (
            <div className="w-full absolute top-5 left-0 z-10">
              <div className=" bg-white w-[95%] mx-auto p-4 shadow-md rounded-md">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center ">
                    <BoltIcon className="h-6 w-6 text-blue-600"></BoltIcon>
                    <h1 className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                      nextPage
                    </h1>
                  </div>
                  <div>
                    <button onClick={() => setFold(false)}>
                      <XMarkIcon className="w-5" />
                    </button>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex flex-col gap-3">
                    <NavLink
                      to="/"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/books"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Books
                    </NavLink>
                    <NavLink
                      to="/about"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      About
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
