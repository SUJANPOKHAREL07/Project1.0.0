import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoSearchCircleSharp } from "react-icons/io5";

import Modal from "./modal";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Signup from "../forms/signinpage";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setSignupOpen] = useState(false);

  return (
    <nav className="bg-[#333] w-full fixed z-1000">
      <div className="flex items-center justify-between h-[5rem] px-5 md:px-10 relative">
        {/* Logo */}
        <a href="/" className="text-white font-extrabold text-3xl">
          Ghum
          <label className="text-red-500">aa</label>
          <label>ri</label>
        </a>

        {/* Desktop Center Nav */}
        <div className="flex space-x-9">
          <div className="hidden md:flex   space-x-8 font-bold text-2xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#efd2d9]" : "text-white"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#efd2d9]" : "text-white"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/packages"
              className={({ isActive }) =>
                isActive ? "text-[#efd2d9]" : "text-white"
              }
            >
              Packages
            </NavLink>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex font-bold text-red-500 bg-[#f5f3f4] rounded-md">
            <input
              type="text"
              placeholder="Search"
              className="outline-[#fc8fa9] px-[2rem] h-7 w-[25rem]"
            />
            <a href="#">
              <IoSearchCircleSharp size={30} />
            </a>
          </div>
        </div>

        {/* Account Icon */}
        <button
          onClick={() => setSignupOpen(true)}
          title="Account"
          className="hidden md:flex"
        >
          <RiAccountPinCircleFill className="cursor-pointer h-[2.8rem] w-[8rem] text-[#f5f3f4]" />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-10 focus:outline-none"
        >
          {isOpen ? (
            <X className="text-white" size={28} />
          ) : (
            <Menu className="bg-white text-red-500 rounded-md" size={28} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-5 pb-4 space-y-4 font-bold text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#efd2d9]" : "text-white"
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#efd2d9]" : "text-white"
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/packages"
            className={({ isActive }) =>
              isActive ? "text-[#efd2d9]" : "text-white"
            }
            onClick={() => setIsOpen(false)}
          >
            Packages
          </NavLink>

          {/* Mobile Search */}
          <div className="flex items-center bg-[#f5f3f4] rounded-md px-2 py-1">
            <input
              type="text"
              placeholder="Search"
              className="outline-[#fc8fa9] px-3 py-1 w-full text-red-500"
            />
            <IoSearchCircleSharp size={25} className="text-red-500 ml-2" />
          </div>

          {/* Mobile Account */}
          <button
            onClick={() => {
              setIsOpen(false);
              setSignupOpen(true);
            }}
            className="flex items-center text-white"
          >
            <RiAccountPinCircleFill size={30} className="mr-2" />
            Account
          </button>
        </div>
      )}

      {isLoginOpen && (
        <Modal>
          <div className="bg-white w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-md p-4">
            <div className="flex justify-end">
              <IoMdCloseCircleOutline
                onClick={() => setSignupOpen(false)}
                className="text-red-500 text-xl cursor-pointer hover:scale-110 transition-transform duration-200"
              />
            </div>
            <Signup />
          </div>
        </Modal>
      )}
    </nav>
  );
};

export default Nav;
