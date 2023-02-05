import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('form input fields work correctly', () => {
    const { getByLabelText, getByText } = render(<BookingForm />);
    const dateInput = getByLabelText(/date/i);
    const timeSelect = getByLabelText(/time/i);
    const guestsInput = getByLabelText(/number of guests/i);
    const occasionInput = getByLabelText(/occasion/i);
    const submitButton = getByText(/submit/i);

    expect(submitButton).toBeDisabled();
    fireEvent.change(dateInput, { target: { value: '2022-02-02' } });
    fireEvent.change(timeSelect, { target: { value: '6:00 PM' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionInput, { target: { value: 'Birthday' } });
    expect(submitButton).toBeEnabled();
  });

  test('form submission works correctly', () => {
    const submitAPI = jest.fn().mockResolvedValue(true);
    const { getByLabelText, getByText } = render(<BookingForm />);
    const dateInput = getByLabelText(/date/i);
    const timeSelect = getByLabelText(/time/i);
    const guestsInput = getByLabelText(/number of guests/i);
    const submitButton = getByText(/submit/i);

    fireEvent.change(dateInput, { target: { value: '2022-02-02' } });
    fireEvent.change(timeSelect, { target: { value: '6:00 PM' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.click(submitButton);
    expect(submitAPI).toHaveBeenCalled();
  });

  test('form submission failure works correctly', () => {
    const submitAPI = jest.fn().mockResolvedValue(false);
    const { getByLabelText, getByText } = render(<BookingForm />);
    const dateInput = getByLabelText(/date/i);
    const timeSelect = getByLabelText(/time/i);
    const guestsInput = getByLabelText(/number of guests/i);
    const submitButton = getByText(/submit/i);

    fireEvent.change(dateInput, { target: { value: '2022-02-02' } });
    fireEvent.change(timeSelect, { target: { value: '6:00 PM' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.click(submitButton);
    expect(submitAPI).toHaveBeenCalled();
  });
});