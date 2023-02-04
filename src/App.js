import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import BookingPage from './BookingPage';
import About from './About';
import Home from './Home';

function App() {
  
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
                </Routes>
            </BrowserRouter>
        </>
    );
}
  
export default App;