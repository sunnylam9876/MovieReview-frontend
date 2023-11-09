import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">RMTV</i></span>
    <ul className="main-nav">
      <li><NavLink to="/" style={({isActive}) => isActive ? {background: 'red'} : undefined}>Home</NavLink></li>
      <li><NavLink to="/signinup">Sign In / Sign Up</NavLink></li>
      <li><NavLink to="/movie">Movie</NavLink></li>

    </ul>    
  </header>
);

export default Header;

