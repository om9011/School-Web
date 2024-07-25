import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { logo, schoolName } = useSelector((state) => state.home);

  return (
    <nav className="  bg-btn-primary p-4 w-full">
      <div className="container  mx-auto flex lg:flex-row flex-col justify-between items-center">
        <Link to="/" className="flex justify-center items-center gap-4">
          <img src={logo} alt="Springdale Public School" className="h-10" />
          <p className="text-primary font-semibold text-2xl">{schoolName}</p>
        </Link>

        <div className="font-semibold hidden lg:flex lg:items-center lg:w-auto lg:space-x-4">
          <Link to="/" className=" py-2 px-4 transition duration-300 ease-in-out transform text-primary hover:scale-110">Home</Link>
          <Link to="/about-us" className=" py-2 px-4 transition duration-300 ease-in-out transform text-primary hover:scale-110">About Us</Link>
          <Link to="/academics" className=" py-2 px-4 transition duration-300 ease-in-out transform text-primary hover:scale-110">Academics</Link>
          <Link to="/admissions" className=" py-2 px-4 transition duration-300 ease-in-out transform text-primary hover:scale-110">Admissions</Link>
          <Link to="/faculty" className=" py-2 px-4 transition duration-300 ease-in-out transform text-primary hover:scale-110">Faculty</Link>
          <Link to="/students" className=" py-2 px-4 transition duration-300 ease-in-out transform text-primary hover:scale-110">Students</Link>
          <Link to="/gallery" className=" py-2 px-4 transition duration-300 ease-in-out transform text-primary hover:scale-110">Gallery</Link>
          <Link to="/contact-us" className=" border py-2 px-4 transition duration-300 ease-in-out transform rounded-full text-btn-primary bg-primary hover:scale-110">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
