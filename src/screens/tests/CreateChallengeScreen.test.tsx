// all input fields should be present (title, description, employeeId, tags, ) should be present

import React from "react";
import { render, screen } from "@testing-library/react";
import HomeScreen from "../HomeScreen";
import mockData from "../../data/mockData.json";
import CreateChallengeScreen from "../CreateChallengeScreen";
import userEvent from "@testing-library/user-event";

test("create challenge screen is rendereed", () => {
  render(<CreateChallengeScreen />);
  expect(screen.getByText(/Create challenge/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Challenge name/i)).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(/Challenge description/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/select tags/i)).toBeInTheDocument();
});

test("new challenge can be created", () => {
  render(<CreateChallengeScreen />);
  expect(screen.queryByTestId("buttonEnabled")).not.toBeInTheDocument();
  userEvent.type(screen.getByPlaceholderText(/challenge name/i), "challenge 1");
  userEvent.type(
    screen.getByPlaceholderText(/challenge description/i),
    "challenge 1 description"
  );
  let elem = screen.queryByText(/select tags/i);
  if (elem) {
    userEvent.click(elem);
  }

  expect(screen.queryAllByText(/javascript/i)).toHaveLength(2);
  userEvent.click(screen.queryAllByText(/javascript/i)[1]);
  expect(screen.queryByTestId("buttonEnabled")).toBeInTheDocument();
});

// title: string,
//   id: string,
//   description: string,
//   'createdAt': number,
//   'tags': string[],
//   'upVotes': number,
//   'downVotes': number,
//   'createdBy': string
