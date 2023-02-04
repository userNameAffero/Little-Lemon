import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

function Nav() {
  return (
    <>
                <BrowserRouter>
                <div style={{
                    display: "flex",
                    background: 'black',
                    padding: '5px 0 5px 5px',
                    fontSize: '20px'
                }}>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Home
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/About" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            About
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/BookingPage" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Reservations
                        </NavLink>
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