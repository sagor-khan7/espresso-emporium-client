import { NavLink } from "react-router-dom";
import bgImg from "../assets/more/15.jpg";
import logo from "../assets/more/logo1.png";
import { useState } from "react";

const Header = () => {
  const [user, setUser] = useState(null);

  return (
    <header
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between py-4 max-w-9/12 mx-auto">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <img src={logo} alt="Espresso Emporium Logo" className="w-10 h-10" />
          <h1 className="text-3xl md:text-5xl font-rancho text-white">
            Espresso Emporium
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-rancho transition ${
                isActive ? "text-yellow-300" : "text-white hover:text-gray-200"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/add-coffee"
            className={({ isActive }) =>
              `text-lg font-rancho transition ${
                isActive ? "text-yellow-300" : "text-white hover:text-gray-200"
              }`
            }
          >
            Add Coffee
          </NavLink>

          {/* If NOT signed in → show Sign In */}
          {!user && (
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                `text-lg font-rancho transition ${
                  isActive
                    ? "text-yellow-300"
                    : "text-white hover:text-gray-200"
                }`
              }
            >
              Sign In
            </NavLink>
          )}

          {/* If signed in → show profile photo with dropdown */}
          {user && (
            <div className="relative group">
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
              />
              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto">
                <NavLink
                  to="/update-profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Update Profile
                </NavLink>
                <button
                  onClick={() => setUser(null)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
