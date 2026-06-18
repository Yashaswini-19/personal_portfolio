import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger and close icons
import logo from "../assets/logo.jpg"; // Ensure this path is correct

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Name */}
        <Link
          to="intro"
          smooth={true}
          duration={500}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-gray-400 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
          />
          <span className="ml-3 text-white text-xl md:text-2xl font-bold">
            Satwik Kamath
          </span>
        </Link>

        {/* Hamburger Menu Button (Visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links - Hidden on small screens, visible on medium and larger */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            to="intro"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 cursor-pointer"
          >
            Education
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {/* Dropdown Menu (Visible on small screens) */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col space-y-4 py-4 items-center shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <Link
            to="intro"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            Education
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            Experience
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-400 cursor-pointer"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
