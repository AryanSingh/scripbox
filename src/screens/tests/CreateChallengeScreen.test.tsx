// all input fields should be present (title, description, employeeId, tags, ) should be present

import React from "react";
import { render, screen } from "@testing-library/react";
import HomeScreen from "../HomeScreen";
import mockData from "../../data/mockData.json";
import CreateChallengeScreen from "../CreateChallengeScreen";

test("create challenge screen is rendereed", () => {
  render(<CreateChallengeScreen />);
  expect(screen.getByText(/Create new challenge/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Challenge name/i)).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(/Challenge description/i)
  ).toBeInTheDocument();
});

// title: string,
//   id: string,
//   description: string,
//   'createdAt': number,
//   'tags': string[],
//   'upVotes': number,
//   'downVotes': number,
//   'createdBy': string
