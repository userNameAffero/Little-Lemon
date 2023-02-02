import React from 'react';
import { render } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes } from './Main';
import { updateTimes } from './Main';

test('renders the text "BookingForm"', () => {
const { getByText } = render(<BookingForm />);
const textElement = getByText(/BookingForm/i);
expect(textElement).toBeInTheDocument();
});

describe('initializeTimes', () => {
    it('should return the expected value', () => {
      const expectedValue = ['12:00', '12:30', '13:00', '13:30', '18:00', '18:30'];
      expect(initializeTimes()).toEqual(expectedValue);
    });
  });

describe('updateTimes', () => {
    it('should return the same value that is provided in the state', () => {
      const state = ['12:00', '12:30', '13:00', '13:30', '18:00', '18:30'];
      const action = { type: 'UPDATE_TIMES', date: '2023-02-02' };
      expect(updateTimes(state, action)).toEqual(state);
    });
  });