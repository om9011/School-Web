import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const { logo, schoolName } = useSelector((state) => state.home);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="bg-btn-primary w-full p-4 text-primary">
        <div className="container  mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="Springdale Public School" className="h-10" />
            <p className=" text-primary font-semibold text-xl">{schoolName}</p>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden focus:outline-none z-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black pt-12 bg-opacity-75 z-30 transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex flex-col justify-center items-left p-4 space-y-4">
          <Link onClick={() => setIsMenuOpen(false)} to="/" className="text-white py-2 px-4 transition duration-300 ease-in-out transform hover:btn-primary hover:scale-110">Home</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/about-us" className="text-white py-2 px-4 transition duration-300 ease-in-out transform hover:btn-primary hover:scale-110">About Us</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/academics" className="text-white py-2 px-4 transition duration-300 ease-in-out transform hover:btn-primary hover:scale-110">Academics</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/admissions" className="text-white py-2 px-4 transition duration-300 ease-in-out transform hover:btn-primary hover:scale-110">Admissions</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/faculty" className="text-white py-2 px-4 transition duration-300 ease-in-out transform hover:btn-primary hover:scale-110">Faculty</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/students" className="text-white py-2 px-4 transition duration-300 ease-in-out transform hover:btn-primary hover:scale-110">Students</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/gallery" className="text-white py-2 px-4 transition duration-300 ease-in-out transform hover:btn-primary hover:scale-110">Gallery</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/contact-us" className="text-white py-2 px-4 transition duration-300 ease-in-out transform hover:btn-primary hover:scale-110">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
