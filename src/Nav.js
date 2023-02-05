import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import logo from './logo.svg';

function Nav() {
  return (
    <>
                <BrowserRouter>
                <div style={{
                    display: "flex",
                    background: '#FFFFFF',
                    padding: '5px 0 5px 5px',
                    fontSize: '20px',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center'
                }}>
                    <img src={logo} alt="logo" />
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? '495E57' : '495E57', textDecoration: isActive ? 'underline' : 'none' })}>
                            Home
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/About" style={({ isActive }) => ({ 
                            color: isActive ? '495E57' : '495E57', textDecoration: isActive ? 'underline' : 'none' })}>
                            About
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/BookingPage" style={({ isActive }) => ({ 
                            color: isActive ? '495E57' : '495E57', textDecoration: isActive ? 'underline' : 'none'  })}>
                            Reservations
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px', display: 'flex' }}>
                        <div style={{ margin: '10px', display: 'flex' }}>Menu</div>
                        <div style={{ margin: '10px', display: 'flex' }}>Online Order</div>
                        <div style={{ margin: '10px', display: 'flex' }}>Login</div>
                    </div>
                </div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/BookingPage" element={<BookingPage />} />
                    <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
                </Routes>
            </BrowserRouter>
    </>
  );
}

export default Nav;