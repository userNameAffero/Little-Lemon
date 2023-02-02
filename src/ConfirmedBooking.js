import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmedBooking = () => {
  const history = useNavigate();

  return (
    <div>
      <h1>Booking Confirmed!</h1>
      <p>Thank you for your booking. You will receive a confirmation email soon.</p>
      <button onClick={() => history.push('/')}>Go back to home page</button>
    </div>
  );
};

export default ConfirmedBooking;