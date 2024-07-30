import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ViewCustomer from './ViewCustomer';
import Viewloan from './ViewLoan';

test('renders link add test', () => {
  render(<BrowserRouter>
    <ViewCustomer />
  </BrowserRouter>);
  const link = screen.getByText('Add +');
  fireEvent.click(link);
  expect(window.location.pathname).toBe('/create');
});

test('renders link add test', () => {
  render(<BrowserRouter>
    <Viewloan />
  </BrowserRouter>);
  const link = screen.getByText('Add +');
  fireEvent.click(link);
  expect(window.location.pathname).toBe('/createloan');
});