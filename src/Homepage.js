import React from 'react';
import Nav from './Nav.js';

const Homepage = () => {
  return (
    <>
      <Nav />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 80px)' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Restaurant Name</h1>
          <p>A small blurb about the restaurant</p>
        </div>
      </div>
    </>
  );
}

export default Homepage;
