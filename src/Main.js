import React, { useState } from 'react';
import { useReducer } from 'react';
import { Routes, Route, BrowserRouter, } from 'react-router-dom';
import heroimage from './img_pop.png';
import greeksalad from './greeksalad.png';
import arrowright from './arrowright.svg';
import stars from './Stars.png';
import av1 from './av1.png'
import av2 from './av2.png'
import av3 from './av3.png'
import av4 from './av4.png'
import doubleimg from './doubleimg.png'
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI } from './api';


const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_AVAILABLE_TIMES') {
    return action.payload;
  }
  return state;
};


const initializeTimes = () => Promise.resolve(fetchAPI(new Date()));


function Main() {
  const [reservationData, setReservationData] = useState(null);
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, null, initializeTimes);

  return (
    <BrowserRouter>
    <BookingForm></BookingForm>
      <Routes>
        <Route path="/" element={
          <div>
            <img src={heroimage} alt="hero image"/>
            <BookingForm availableTimesData={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} setReservationData={setReservationData} />
          </div>
        } />
        <Route path="/reservation" element={
          <ConfirmedBooking reservationData={reservationData} />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
