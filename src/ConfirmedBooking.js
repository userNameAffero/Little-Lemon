import React from 'react';
import bookingconfirmed from './bookingconfirmed.svg'

function ConfirmedBooking() {
  return (
    <div style={{ display: 'flex', backgroundColor: '#495E57', color: 'white', justifyContent: "center", alignItems: "center", justifyItems: 'center', alignContent: 'center', paddingTop: '120px', paddingBottom: '200px'}}>
      <img src={bookingconfirmed} alt="Booking Confirmed" />
      <h1>Booking Confirmed</h1>
    </div>
  );
}

export default ConfirmedBooking;