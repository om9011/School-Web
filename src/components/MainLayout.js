import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar.js';
import useWindowWidth from '../hooks/useWindowWidth'; // Adjust path as needed

const MainLayout = () => {
  const windowWidth = useWindowWidth();
  const isLargeScreen = windowWidth >= 1024; // You can adjust this breakpoint as needed

  return (
    <>
      {isLargeScreen ? <Navbar /> : <Sidebar />}
    </>
  );
};

export default MainLayout;
