import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const username = user?.username || "Guest";
  const avatarUrl = user?.avatar || "https://img.freepik.com/premium-vector/people-profile-icon_24877-40760.jpg?w=360"; 

  const handleLogout = () => {
    try {
      logoutUser();
    } catch (error) {
      console.error(`The error is ${error}`);
    }
  };

  return (
    <div className="bg-[#B71C1C]">
      <div className="navbar max-w-[95%] mx-auto text-[#FFFFFF]">
        {/* Logo Section */}
        <div className="flex-1">
          <a
            className="btn btn-ghost text-xl sm:text-2xl text-[#FFCDD2] hover:text-[#FF8A80]"
            href="#"
          >
            PetPals
          </a>
        </div>

        {/* Right Section */}
        <div className="flex-none gap-2">
          {/* Hamburger Menu for Small Screens */}
          <div className="dropdown dropdown-end sm:hidden">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle text-[#FFCDD2] hover:text-[#FF8A80]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.75h16.5m-16.5 6.5h16.5m-16.5 6.5h16.5"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#D32F2F] text-[#FFFFFF] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/user" className="text-[#FFCDD2] hover:text-[#FF8A80] capitalize">
                  {username}
                </Link>
              </li>
              <li>
                <a
                  onClick={handleLogout}
                  className="text-[#FFCDD2] hover:text-[#FF8A80]"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>

          {/* Avatar for Larger Screens */}
          <div className="hidden sm:flex dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar cursor-pointer"
            >
              <div className="w-10 rounded-full ring ring-[#FF8A80] ring-offset-2">
                <img
                  alt="User Avatar"
                  src={avatarUrl}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#D32F2F] text-[#FFFFFF] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/user" className="justify-between text-[#FFCDD2] hover:text-[#FF8A80] capitalize">
                  {username}
                </Link>
              </li>
              <li>
                <a
                  onClick={handleLogout}
                  className="text-[#FFCDD2] hover:text-[#FF8A80]"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
