import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Site label', () => {
  render(<App />);
  const labelElement = screen.getByText(/My Site/i);
  expect(labelElement).toBeTruthy();
});
