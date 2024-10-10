import { NavLink, useNavigate } from "react-router-dom";
import {
  cross_icon,
  dropdown_icon,
  logo,
  menu_icon,
  navLinks,
  profile_pic,
} from "../constants";
import { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/login")}
        className="w-40 cursor-pointer"
        src={logo}
        alt="logo"
        width={216}
        height={46}
      />
      <ul className="hidden lg:flex items-start gap-5 font-medium">
        {navLinks.map((navLink) => (
          <li key={navLink.name}>
            <NavLink className="nav__link relative" to={navLink.link}>
              {navLink.name}
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden mt-1 absolute inset-x-0 bottom-n-1" />
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              src={profile_pic}
              alt="profile-logo"
              className="w-10 rounded-full object-contain"
            />
            <img className="w-2.5" src={dropdown_icon} alt="dropdown-icon" />
            <div className="absolute top-1 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <Button
            label="Create account"
            onClick={() => navigate("/login")}
            fontSize="text-[9px]"
            padding="p-3"
          />
        )}

        <img
          onClick={() => setShowMenu(true)}
          className="w-6 lg:hidden ml-3"
          src={menu_icon}
          alt="hamburger"
        />
        {/* Mobile menu */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } lg:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-4">
            <img className="w-44" src={logo} alt="logo" />
            <img
              onClick={() => setShowMenu(false)}
              src={cross_icon}
              alt="cross-icon"
              className="w-7 h-7"
            />
          </div>
          <ul className="flex flex-col items-center justify-center gap-3 mt-5 px-5 text-lg font-medium h-[70%]">
            {navLinks.map((item, index) => (
              <NavLink
                onClick={() => setShowMenu(false)}
                key={index}
                to={item.link}
              >
                <p className="px-4 py-2 rounded inline-block">{item.name}</p>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
