import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import RegisterDropdown from "./RegisterDropdown";
import ResourceDropdown from "./ResourceDropdown";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);
  const [isResourceDropdownOpen, setIsResourceDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "register") {
      setIsRegisterDropdownOpen(!isRegisterDropdownOpen);
      setIsResourceDropdownOpen(false);
    } else if (dropdown === "resources") {
      setIsResourceDropdownOpen(!isResourceDropdownOpen);
      setIsRegisterDropdownOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header
        className="py-8 px-4 md:px-14 lg2:px-28 w-full linear-bg font-figtree"
      >
        <div className="flex flex-row justify-between items-center container mx-auto ">
          <Link to="/">
            <img src="/common/logo.png" className="h-20 md:h-28" alt="Logo" />
          </Link>

          {/* Hamburger Button */}
          {/* <div className="lg:hidden flex items-center">
            <button className="text-white text-2xl" onClick={toggleSidebar}>
              {isSidebarOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div> */}

          {/* <div className="hidden lg:flex font-semibold items-center md:space-x-8 large:space-x-16">
            <Link
              to="/"
              className="text-white hover:text-secondary underline-animate text-2xl relative inline-block"
            >
              Home
            </Link>
            <Link
              to="/events"
              className="text-white hover:text-secondary text-2xl underline-animate relative inline-block"
            >
              Events
            </Link>
            <Link
              to={'/register'}
              className="text-white hover:text-secondary text-2xl underline-animate relative inline-block"
            >
              Register
            </Link>

            <Link
              to="/schedule"
              className="text-white hover:text-secondary text-2xl underline-animate relative inline-block"
            >
              Schedule
            </Link>

            <div className="underline-animate text-secondary relative inline-block">
              <button
                className="text-white hover:text-secondary flex items-center text-2xl "
                onClick={() => toggleDropdown("resources")}
              >
                Resources
                <FaChevronDown
                  className={`ml-1 transition-transform duration-200 ${
                    isResourceDropdownOpen ? "transform rotate-180" : ""
                  } text-sm`}
                />
              </button>
              <ResourceDropdown
                isDropdownOpen={isResourceDropdownOpen}
                position={{ right: 200, top: 100 }}
              />
            </div>

            <Link
              to="/contact"
              className="text-white hover:text-secondary text-2xl underline-animate relative inline-block"
            >
              Contact
            </Link>
          </div> */}
        </div>
      </header>
      {/* <div className="lg:hidden">
        <Sidebar
          className="lg:hidden"
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
      </div> */}
    </>
  );
};

export default Header;
