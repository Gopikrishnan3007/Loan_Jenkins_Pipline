import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'; 
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

test('renders link add test', () => {
  render(<BrowserRouter>
  <Header />
  </BrowserRouter>);
  const link = screen.getByText('Home');
  fireEvent.click(link);
  expect(window.location.pathname).toBe('/');
});
