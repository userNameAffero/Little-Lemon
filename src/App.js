import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Reservations from './Reservations';
import About from './About.js';

function App() {
  
  return (
      <>
          <Router>
              <div style={{
                  display: "flex",
                  background: 'white',
                  padding: '5px 0 5px 5px',
                  fontSize: '20px'
              }}>
                  <div style={{ margin: '10px' }}>
                      <NavLink to="/Home" style={({ isActive }) => ({
                          color: isActive ? '#495E57' : '#232323',
                          textDecoration: 'none',
                          fontFamily: 'Markazi Text',
                          fontSize: '20px',
                          })}>
                          Home
                      </NavLink>
                  </div>
                  <div style={{ margin: '10px' }}>
                      <NavLink to="/About" style={({ isActive }) => ({ 
                          color: isActive ? '#495E57' : '#232323', textDecoration: 'none', fontFamily: 'Markazi Text', fontWeight: '500', fontSize: '20px' })}>
                          About
                      </NavLink>
                  </div>
                  <div style={{ margin: '10px' }}>
                      <NavLink to="/Reservations" style={({ isActive }) => ({ 
                          color: isActive ? '#495E57' : '#232323', textDecoration: 'none', fontFamily: 'Markazi Text', fontWeight: '500', fontSize: '20px' })}>
                          Reservations
                      </NavLink>
                  </div>
              </div>
              <Routes>
                  <Route exact path="/Main" element={<Main />} />
                  <Route exact path="/About" element={<About />} />
                  <Route exact path="/Reservations" element={<Reservations />} />
              </Routes>
          </Router>
          <Main />
          <Footer />
      </>
  );
}
export default App;