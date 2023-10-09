import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
const Layout = () => {
  return (
    <div className="d-flex flex-column justify-content-between min-vh-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
