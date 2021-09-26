import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Challenge from "../Challenge";
import mockData from "../../data/mockData.json";

test("logging in removes login screen", async () => {
  let challenge = mockData.challenges[0];
  render(<Challenge challenge={challenge} fetchChallenges={() => {}} />);
  expect(screen.queryByText(challenge.title)).toBeInTheDocument();
  expect(screen.queryByText(challenge.description)).toBeInTheDocument();
  expect(
    screen.queryByText(new Date(challenge.createdAt).toLocaleString())
  ).toBeInTheDocument();
  expect(screen.queryByTestId(`upvotes${challenge.id}`)).toBeInTheDocument();
  expect(screen.queryByTestId(`downvotes${challenge.id}`)).toBeInTheDocument();
  challenge.tags.forEach((tag) => {
    expect(screen.queryByTestId(`${challenge.id}${tag}`)).toBeInTheDocument();
  });
});
