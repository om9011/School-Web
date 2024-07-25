import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { logo, schoolName } = useSelector((state) => state.home);

  return (
    <footer className="bg-gray-800 p-6 mt-10">
      <div className="container mx-auto text-white">
        {/* School Name and Links */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <img src={logo} alt={schoolName} className="h-12 mb-4" />
            <h2 className="text-xl font-bold">{schoolName}</h2>
          </div>

          {/* Social Handles */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/springdale" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2a6 6 0 00-6 6c0 3.1 2.4 5.8 5.5 6.3V12h-2V9h2V7.5a2.5 2.5 0 012.5-2.5H21V7h-2v1.7h-1v2.3h1V14h-1.5c-3.1-.5-5.5-3.2-5.5-6a6 6 0 016-6h1a6 6 0 016 6v1h-1V7a6 6 0 00-6-6z" />
                </svg>
              </a>
              <a href="https://twitter.com/springdale" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.42 2a8.95 8.95 0 01-2.84 1.08A4.46 4.46 0 0016.5 3a4.48 4.48 0 00-4.5 4.5c0 .35.04.7.1 1.03A12.75 12.75 0 012 4.6a4.48 4.48 0 001.4 6.02A4.48 4.48 0 01.96 9.9a4.48 4.48 0 003.6 4.5A4.46 4.46 0 013 12a4.48 4.48 0 001.28.18 4.48 4.48 0 003.4-1.52A4.48 4.48 0 007 14a4.48 4.48 0 003.2-2.28A4.48 4.48 0 0014 14a4.48 4.48 0 00.5-4.5c.1-.35.1-.7.1-1.03a4.48 4.48 0 001.25-.5A9.98 9.98 0 0023 3z" />
                </svg>
              </a>
              <a href="https://instagram.com/springdale" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.25a5.75 5.75 0 015.75 5.75v8.5a5.75 5.75 0 01-5.75 5.75h-8.5A5.75 5.75 0 012 16.5v-8.5A5.75 5.75 0 017.75 2.25h8.5zM12 1.5H7.75A6.25 6.25 0 001.5 7.75v8.5A6.25 6.25 0 007.75 22.5h8.5A6.25 6.25 0 0022.5 16.25v-8.5A6.25 6.25 0 0016.25 1.5h-4.5zM12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 1a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm5.25-3.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Top Resources</h3>
            <ul>
              <li><Link to="/academics" className="hover:text-gray-400">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-gray-400">Admissions</Link></li>
              <li><Link to="/faculty" className="hover:text-gray-400">Faculty</Link></li>
              <li><Link to="/students" className="hover:text-gray-400">Students</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <ul>
              <li><Link to="/about-us" className="hover:text-gray-400">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-gray-400">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <ul>
              <li><Link to="/contact-us" className="hover:text-gray-400">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} Springdale Public School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
