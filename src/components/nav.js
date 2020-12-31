import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

function Nav() {

   const [isMenuopen, setIsMenuOpen] = useState(false);


   function toggleMenu() {
      setIsMenuOpen(!isMenuopen);
      console.log(isMenuopen);
   }

   return (

      <div className="nav">

         <Link to='/clubs'>
            <nav className="logo">
               <img src={logo} className={isMenuopen ? "logo__img hide" : "logo__img"} alt="Royal Crowns Logo" />
               <Link to='/findMember'><p className={isMenuopen ? "logo__lang" : "logo__lang hide"} onClick={toggleMenu}>RS</p></Link>
               <p className={isMenuopen ? "logo__text hide" : "logo__text"}>Royal <br /> Crowns</p>
            </nav>
         </Link>

         <div className="menuBtn" onClick={toggleMenu}>
            <span className={isMenuopen ? "menuLineBtn menuLineBtn--1" : "menuLineBtn"}></span>
            <span className={isMenuopen ? "menuLineBtn menuLineBtn--2" : "menuLineBtn"}></span>
            <span className={isMenuopen ? "menuLineBtn menuLineBtn--3" : "menuLineBtn"}></span>
         </div>

         <div className={isMenuopen ? "menu menu__open" : "menu"}>
            <img src={logo} alt="Menu Background" className="menu__bg" />
            <div className="menu__links">
               <Link to="/form" onClick={toggleMenu}><p>JOIN THE CLUB</p></Link>
               <Link to='/clubs/American-Football' onClick={toggleMenu}><p>AMERICAN FOOTBALL</p></Link>
               <Link to='/clubs/Athletics' onClick={toggleMenu}> <p>ATHLETICS</p></Link>
               <Link to='/clubs/Soccer' onClick={toggleMenu}><p>SOCCER</p></Link>
               <Link to='/clubs/Baseball' onClick={toggleMenu}><p>BASEBALL</p></Link>
               <Link to="/findMember" onClick={toggleMenu}><p>FIND A MEMBER</p></Link>
            </div>
         </div>

      </div>

   );

}

export default Nav;


