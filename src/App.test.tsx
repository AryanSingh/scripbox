import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('login button is rendered and employeeId field is present',  () => {
  render(<App />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByTestId('employeeId')).toBeInTheDocument();
});

test('logging in removes login screen', async () => {
  render(<App/>);
  userEvent.type(screen.getByTestId('employeeId'), 'aryan');
  userEvent.click(screen.getByText(/login/i));
  const linkElement = screen.getByText(/home screen/i);
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByTestId('employeeId')).not.toBeInTheDocument();
});
