import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div className="logo">LOGO</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;