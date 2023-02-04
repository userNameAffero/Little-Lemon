import React from 'react';
import Nav from './Nav';
import Splash from './Splash';
import Footer from './Footer';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import BookingPage from './BookingPage';

function Main() {

  return (
    <Router>
      <Nav />
      <Route exact path="/">
        <Splash />
      </Route>
      <Route path="/booking">
        <BookingPage
        />
      </Route>
      <Route path="/booking-confirmed">
        <div>Booking Confirmed</div>
      </Route>
      <Footer />
    </Router>
  );
}

export default Main;
