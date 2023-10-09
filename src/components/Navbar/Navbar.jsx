import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../../assets/foodlogo.png';
import { Link } from 'react-router-dom';
import './style.css';
import { useApp } from '../../hook/useApp';

import { BiSolidUser } from 'react-icons/bi';
import { BiShoppingBag } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const { show, setShow } = useApp();
  const navigate = useNavigate();
  return (
    <Navbar
      className="navbar d-flex align-items-center justify-content-between px-5 shadow-sm"
      bg="light "
      sticky="top"
    >
      <div>
        <button className="bg-transparent border-0 d-lg-none">
          <BiShoppingBag className="bar fs-4" onClick={() => setShow(true)} />
        </button>
        <Navbar.Brand href="/" className="navbar-brand d-none  d-lg-flex  ">
          foodex
        </Navbar.Brand>
      </div>
      <div>
        <Link to="/" className="navbar-brand d-lg-none  ">
          foodex
        </Link>
      </div>
      <button className="bg-transparent border-0         ">
        <BiSolidUser
          className=" User fs-5  "
          onClick={() => navigate('/login')}
        />{' '}
        Login
      </button>
    </Navbar>
  );
};

export default Header;
