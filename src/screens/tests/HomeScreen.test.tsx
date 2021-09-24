import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import HomeScreen from "../HomeScreen";
import mockData from '../../data/mockData.json';

// should contain text all challenges
// all challenges should be rendered
// there should be a button for creating new challenge
// there should be a filter button, clicking on which should change filtering order

test('home screen is rendered',  () => {
  render(<HomeScreen />);
  expect(screen.getByText(/all challenges/i)).toBeInTheDocument();
});

test('all challenges are rendered correctly', () => {
  render(<HomeScreen/>);
  mockData.challenges.forEach((challenge) => {
    expect(screen.queryByText(challenge.title)).toBeInTheDocument();
    expect(screen.queryByText(challenge.description)).toBeInTheDocument();
    expect(screen.queryByText(challenge.createdAt)).toBeInTheDocument();
    expect(screen.queryByText(challenge.upVotes)).toBeInTheDocument();
    expect(screen.queryByText(challenge.downVotes)).toBeInTheDocument();
    challenge.tags.forEach((tag) => {
      expect(screen.queryByText(tag)).toBeInTheDocument();
    })

  })
})