import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import HomeScreen from "../HomeScreen";

// should contain text all challenges
// all challenges should be rendered
// there should be a button for creating new challenge
// there should be a filter button, clicking on which should change filtering order

test('home screen is rendered',  () => {
  render(<HomeScreen />);
  expect(screen.getByText(/all challenges/i)).toBeInTheDocument();
});