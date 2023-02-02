import React, { useState, useEffect } from 'react';
import { submitAPI } from './api';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ availableTimesData, dispatch }) => {
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [availableTimeOptions, setAvailableTimeOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (reservationDate) {
      dispatch({ type: 'UPDATE_TIMES', date: reservationDate });
    }
  }, [reservationDate, dispatch]);

  useEffect(() => {
    if (availableTimesData && availableTimesData.then) {
      availableTimesData.then((times) => {
        if (times && times[reservationDate]) {
          setAvailableTimeOptions(times[reservationDate]);
        }
      });
    }
  }, [availableTimesData, reservationDate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!reservationDate || !reservationTime || !guests || !occasion) {
      return;
    }
    const data = { reservationDate, reservationTime, guests, occasion };
    const reservationData = await submitAPI(data);
    if (reservationData) {
      setReservationTime(reservationData);
      navigate('/reservation');
    }
  };

  return (
    <form style={{ display: 'block' }}>
      <div>
        <label htmlFor="reservationDate">Date:</label>
        <input
          type="date"
          id="reservationDate"
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="reservationTime">Time:</label>
        <select
          id="reservationTime"
          value={reservationTime}
          onChange={(e) => setReservationTime(e.target.value)}
        >
          <option value="" disabled>Select a time</option>
          {availableTimeOptions.map((time) => (
            <option value={time} key={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="guests">Guests:</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
/>
</div>
<div>
<label htmlFor="occasion">Occasion:</label>
<input
type="text"
id="occasion"
value={occasion}
onChange={(e) => setOccasion(e.target.value)}
/>

</div>
<button type="submit" onClick={handleSubmit}>Submit</button>
</form>
);
};
export default BookingForm;