import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from './Api';

const BookingForm = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [guests, setGuests] = useState(null);
  const [occasion, setOccasion] = useState(null);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    if (date) {
      setTimes(fetchAPI(date));
    }
  }, [date]);

  const handleSubmit = event => {
    event.preventDefault();
    const formData = { date, time, guests, occasion };
    submitAPI(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">
        Date:
        <input type="date" id="date" onChange={event => setDate(new Date(event.target.value))} />
      </label>
      <br />
      <label htmlFor="time">
        Time:
        <select id="time" onChange={event => setTime(event.target.value)}>
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
        <select id="guests" onChange={event => setGuests(event.target.value)}>
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
      <button type="submit">Submit reservation</button>
    </form>
  );
};

export default BookingForm;
