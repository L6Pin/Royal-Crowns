import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (


   <>
      <Link to='/teams'>
         <h3>Teams</h3>
      </Link>
      <Link to='/form'>
         <h3>Form</h3>
      </Link>

   </>

);

export default Nav;