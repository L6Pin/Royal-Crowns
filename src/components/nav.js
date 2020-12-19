import React, { Component, useState } from 'react';
import logo from '../img/logo.png';

function Nav() {

   const [isMenuopen, setIsMenuOpen] = useState(false);

   
   function openMenu(){
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

         <div className="menuBtn" onClick={openMenu}>
            <span className={isMenuopen ? "menuLineBtn menuLineBtn--1" : "menuLineBtn"}></span>
            <span className={isMenuopen ? "menuLineBtn menuLineBtn--2" : "menuLineBtn"}></span>
            <span className={isMenuopen ? "menuLineBtn menuLineBtn--3" : "menuLineBtn"}></span>
         </div>

         <div className={isMenuopen ? "menu menu__open" : "menu"}>
            <img src={logo} alt="Menu Background" className="menu__bg" />
            <div className="menu__links">
               <p>JOIN THE CLUB</p>
               <p>AMERICAN FOOTBALL</p>
               <p>ATHLETICS</p>
               <p>CLUB #3</p>
               <p>CLUB #4</p>
               <p>FIND A MEMBER</p>
            </div>
         </div>

      </div>

   );

}

export default Nav;


