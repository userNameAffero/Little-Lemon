import React from 'react';
import logo from './logo.svg';

function Nav() {
  return (
    <nav style={{ display: 'flex', height: '80px', alignItems: 'center', justifyContent: 'center' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={logo} alt="Little Lemon logo" style={{ padding: '72px' }}></img>
        <li style={{ marginRight: '40px' }}><a href="/" style={{ color: '#232323', textDecoration: 'none', fontFamily: 'Markazi Text', fontWeight: '500', fontSize: '20px' }}>Home</a></li>
        <li style={{ marginRight: '40px' }}><a href="/about" style={{ color: '#232323', textDecoration: 'none', fontFamily: 'Markazi Text', fontWeight: '500', fontSize: '20px' }}>About</a></li>
        <li style={{ marginRight: '40px' }}><a href="/menu" style={{ color: '#232323', textDecoration: 'none', fontFamily: 'Markazi Text', fontWeight: '500', fontSize: '20px' }}>Menu</a></li>
        <li style={{ marginRight: '40px' }}><a href="/reservations" style={{ color: '#232323', textDecoration: 'none', fontFamily: 'Markazi Text', fontWeight: '500', fontSize: '20px' }}>Reservations</a></li>
        <li style={{ marginRight: '40px' }}><a href="/order-online" style={{ color: '#232323', textDecoration: 'none', fontFamily: 'Markazi Text', fontWeight: '500', fontSize: '20px' }}>Order Online</a></li>
        <li style={{ marginRight: '40px' }}><a href="/login" style={{ color: '#232323', textDecoration: 'none', fontFamily: 'Markazi Text', fontWeight: '500', fontSize: '20px' }}>Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;