
import React from 'react';
import { render, screen } from '@testing-library/react';
import ClientInput from '../src/components/waiter/client';

test('renders the ClientInput component correctly', () => {
  render(<ClientInput />);
  
  const inputElement = screen.getByPlaceholderText('Nombre del cliente');
  expect(inputElement).toBeInTheDocument();
});

test('input element is empty initially', () => {
  render(<ClientInput />);
  
  const inputElement = screen.getByPlaceholderText('Nombre del cliente');
  expect(inputElement).toHaveValue('');
});

test('typing updates the input value', () => {
  render(<ClientInput />);
  
  const inputElement = screen.getByPlaceholderText('Nombre del cliente');
  const testValue = 'John Doe';

  // Simulate typing the value
  userEvent.type(inputElement, testValue);

  expect(inputElement).toHaveValue(testValue);
});