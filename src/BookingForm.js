import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchAPI, submitAPI } from './Api';
import ConfirmedBooking from './ConfirmedBooking';

const BookingForm = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [guests, setGuests] = useState(null);
  const [occasion, setOccasion] = useState(null);
  const [times, setTimes] = useState([]);

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (date) {
      setTimes(fetchAPI(date));
    }
  }, [date]);

  useEffect(() => {
    setFormValid(date && time && guests);
  }, [date, time, guests]);

  const handleSubmit = event => {
    event.preventDefault();
    const formData = { date, time, guests, occasion };
    if (submitAPI(formData)) {
      window.location.href = '/ConfirmedBooking';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">
        Date:
        <input 
          type="date" 
          id="date" 
          required
          onChange={event => setDate(new Date(event.target.value))} 
        />
      </label>
      <br />
      <label htmlFor="time">
        Time:
        <select 
          id="time" 
          required
          onChange={event => setTime(event.target.value)}
        >
          <option value="">Select a time</option>
          {times.map(t => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label htmlFor="guests">
        Number of guests:
        <select 
          id="guests" 
          required
          onChange={event => setGuests(event.target.value)}
        >
          <option value="">Select number of guests</option>
          {Array.from({ length: 8 }, (_, i) => i + 1).map(n => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label htmlFor="occasion">
        Occasion:
        <select id="occasion" onChange={event => setOccasion(event.target.value)}>
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </label>
      <br />
      <button type="submit" aria-label="On Click" disabled={!formValid}>Submit reservation</button>
    </form>
  );
};

export default BookingForm;