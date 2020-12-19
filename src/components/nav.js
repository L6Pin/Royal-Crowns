import React, { Component } from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

const Nav = () => (

   <div className="nav">

      <nav className="logo">
      <img src={logo} className="logo__img" alt="Royal Crowns Logo"/>
      {/* <p className="logo__lang">RS</p> */}
      {/* <p className="logo__lang">EN</p> */}
      <p className="logo__text">Royal <br/> Crowns</p>
      </nav>

      <div className="menuBtn">
         <span className="menuLineBtn menuLineBtn--1"></span>
         <span className="menuLineBtn menuLineBtn--2"></span>
         <span className="menuLineBtn menuLineBtn--3"></span>
      </div>

      <div className="menu">
         <img src={logo} alt="Menu Background" className="menu__bg"/>
      </div>

   </div>

);

export default Nav;