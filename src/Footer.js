import React from 'react';
import logo from './logo.svg';
import twitter from './twitter.svg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';

function Footer() {
  return (
    <footer style={{ display: 'flex', justifyContent: 'center', padding: '120px' }}>
      <img src={logo} alt="logo" style={{ width: '20%', marginRight: '5%' }} />
      <div style={{marginRight: '72px'}}>
        <h2 style={{ fontFamily: 'Karla', fontWeight: '500', fontSize: '20px', color: '#495E57',  }}>Little Lemon</h2>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li><a href="/" style={{ color: '#3D3D3D', textDecoration: 'none'}}>Home</a></li>
          <li><a href="/about" style={{ color: '#3D3D3D', textDecoration: 'none' }}>About</a></li>
          <li><a href="/menu" style={{ color: '#3D3D3D', textDecoration: 'none' }}>Menu</a></li>
          <li><a href="/reservations" style={{ color: '#3D3D3D', textDecoration: 'none' }}>Reservations</a></li>
          <li><a href="/order-online" style={{ color: '#3D3D3D', textDecoration: 'none' }}>Order Online</a></li>
        </ul>
      </div>
      <div style={{marginRight: '72px'}}>
        <h2 style={{ fontFamily: 'Karla', fontWeight: '500', fontSize: '20px', color: '#495E57'}}>Contact</h2>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li><a href="/contact-us" style={{ color: '#3D3D3D', textDecoration: 'none' }}>Contact Us</a></li>
        </ul>
      </div>
      <div style={{marginRight: '72px'}}>
        <h2 style={{ fontFamily: 'Karla', fontWeight: '500', fontSize: '20px', color: '#495E57' }}>Social Media</h2>
        <div style={{ display: 'flex' }}>
            <img src={facebook} alt="Facebook" style={{ width: '25px', marginRight: '10px' }} />
            <img src={twitter} alt="Twitter" style={{ width: '25px', marginRight: '10px' }} />
            <img src={instagram} alt="Instagram" style={{ width: '25px' }} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;