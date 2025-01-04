import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#B71C1C]">
      <header className="w-full mx-auto">
        <div className="mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <h1 className="text-[#fff] text-[20px] sm:text-[30px] font-bold">
              PetPals
              </h1>
            </div>

            <div className="flex md:hidden">
              <button onClick={toggleMenu} className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`${
                isMenuOpen ? "hidden" : "hidden"
              } md:flex md:items-center gap-4`}
            >
              <Link
                to="/shelterlogin"
                className="rounded-md bg-[#fff] px-5 py-2.5 text-sm font-medium text-[#B71C1C] shadow"
              >
                Shelter
              </Link>

              <Link
                to="/"
                className="rounded-md bg-[#fff] px-5 py-2.5 text-sm font-medium text-[#B71C1C] shadow"
              >
                Adopter
              </Link>
            </div>
          </div>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } flex flex-col items-center mt-4  space-y-4 md:hidden`}
          >
            <Link
              to="/shelterlogin"
              className="rounded-md bg-[#fff] px-5 py-2.5 text-sm font-medium text-[#B71C1C] shadow"
            >
              Shelter
            </Link>
            <Link
              to="/"
              className="rounded-md bg-[#fff] px-5 py-2.5 text-sm font-medium text-[#B71C1C]  shadow"
            >
              Adopter
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
