import React from "react";
import { render, screen } from "@testing-library/react";
import HomeScreen from "../HomeScreen";
import mockData from "../../data/mockData.json";

import userEvent from "@testing-library/user-event";

// should contain text all challenges
// all challenges should be rendered
// there should be a button for creating new challenge
// there should be a filter button, clicking on which should change filtering order

test("home screen is rendered", () => {
  render(<HomeScreen />);
  expect(screen.getByText(/all challenges/i)).toBeInTheDocument();
});

test("all challenges and create challenge button are rendered correctly", () => {
  render(<HomeScreen />);
  mockData.challenges.forEach((challenge) => {
    expect(
      screen.queryByTestId(`challenge${challenge.id}`)
    ).toBeInTheDocument();
  });
  expect(screen.queryByText(/create challenge/i)).toBeInTheDocument();
});

test("upvotes and downvotes working properly", () => {
  // @ts-ignore
  const logSpy = jest.spyOn(console, "log");

  render(<HomeScreen />);
  userEvent.click(screen.queryByTestId(`thumbup${1}`)!);
  expect(logSpy).toBeCalledWith("fetchChallenges");
  // expect(screen.queryByTestId(`upvotes${1}`)!.innerHTML).toBe(102);
});
