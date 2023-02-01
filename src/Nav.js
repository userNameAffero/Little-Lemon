import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';


const Nav = () => (
  <nav style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
    <img src={logo} alt="Logo" />
    <ul style={{ display: 'flex', justifyContent: 'space-between', listStyleType: 'none' }}>
      <NavItem to="/" text="Home" />
      <NavItem to="/about" text="About" />
      <NavItem to="/menu" text="Menu" />
      <NavItem to="/reservations" text="Reservations" />
      <NavItem to="/order" text="Order" />
      <NavItem to="/login" text="Login" />
    </ul>
  </nav>
);


const NavItem = ({ to, text }) => (
  <li style={{ marginRight: '36px' }}>
    <NavLink
      exact
      activeStyle={{ color: '#9b59b6' }}
      style={{ color: '#232323', textDecoration: 'none', fontFamily: 'Markazi Text', fontWeight: '500', fontSize: '20px' }}
      to={to}
    >
      {text}
    </NavLink>
  </li>
);


export default Nav;