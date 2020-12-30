import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

function Nav() {

   const [isMenuopen, setIsMenuOpen] = useState(false);

   
   function toggleMenu(){
      setIsMenuOpen(!isMenuopen);   
      console.log(isMenuopen);
   }

   return (

      <div className="nav">

         <nav className="logo">
            <img src={logo} className={isMenuopen ? "logo__img hide" : "logo__img"} alt="Royal Crowns Logo" />
            <p className={isMenuopen ? "logo__lang" : "logo__lang hide"}>RS</p>
            <p className={isMenuopen ? "logo__text hide" : "logo__text"}>Royal <br /> Crowns</p>
         </nav>

         <div className="menuBtn" onClick={toggleMenu}>
            <span className={isMenuopen ? "menuLineBtn menuLineBtn--1" : "menuLineBtn"}></span>
            <span className={isMenuopen ? "menuLineBtn menuLineBtn--2" : "menuLineBtn"}></span>
            <span className={isMenuopen ? "menuLineBtn menuLineBtn--3" : "menuLineBtn"}></span>
         </div>

         <div className={isMenuopen ? "menu menu__open" : "menu"}>
            <img src={logo} alt="Menu Background" className="menu__bg" />
            <div className="menu__links">
               <Link to="/form" onClick={toggleMenu}><p>JOIN THE CLUB</p></Link>
               <Link   onClick={toggleMenu}><p>AMERICAN FOOTBALL</p></Link>
               <Link  onClick={toggleMenu}> <p>ATHLETICS</p></Link>
               <Link  onClick={toggleMenu}><p>CLUB #3</p></Link>
               <Link  onClick={toggleMenu}><p>CLUB #4</p></Link>
               <Link to="/findMember" onClick={toggleMenu}><p>FIND A MEMBER</p></Link>
            </div>
         </div>

      </div>

   );

}

export default Nav;


