import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeScreen from '../HomeScreen';
import mockData from '../../data/mockData.json';

// should contain text all challenges
// all challenges should be rendered
// there should be a button for creating new challenge
// there should be a filter button, clicking on which should change filtering order

test('home screen is rendered', () => {
  render(<HomeScreen />);
  expect(screen.getByText(/all challenges/i)).toBeInTheDocument();
});

test('all challenges are rendered correctly', () => {
  render(<HomeScreen />);
  mockData.challenges.forEach((challenge) => {
    expect(screen.queryByText(challenge.title)).toBeInTheDocument();
    expect(screen.queryByText(challenge.description)).toBeInTheDocument();
    expect(screen.queryByText(challenge.createdAt)).toBeInTheDocument();
    expect(screen.queryByTestId(`upvotes${challenge.id}`)).toBeInTheDocument();
    expect(screen.queryByTestId(`downvotes${challenge.id}`)).toBeInTheDocument();
    challenge.tags.forEach((tag) => {
      expect(screen.queryByTestId(`${challenge.id}${tag}`)).toBeInTheDocument();
    });
    expect(screen.queryByText(/create challenge/i)).toBeInTheDocument();
  });
});
