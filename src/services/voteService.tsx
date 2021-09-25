import React from "react";
import { IChallenge, IStore } from "../types";

export const upVote = (id: string) => {
  let data: string | IStore | null = localStorage.getItem("data");
  if (data === null) {
    data = {
      challenges: [],
    };
  } else {
    data = JSON.parse(data) as IStore;
  }
  if (data && typeof data === "object" && data.challenges) {
    let copyData = data.challenges.map((challenge) => {
      if (challenge.id === id) {
        return { ...challenge, upVotes: challenge.upVotes + 1 };
      }
      return challenge;
    });
    localStorage.setItem("data", JSON.stringify({ challenges: copyData }));
  }
};

export const downVote = (id: string) => {
  let data: string | IStore | null = localStorage.getItem("data");
  if (data === null) {
    data = {
      challenges: [],
    };
  } else {
    data = JSON.parse(data) as IStore;
  }
  if (data && typeof data === "object" && data.challenges) {
    let copyData = data.challenges.map((challenge) => {
      if (challenge.id === id) {
        return { ...challenge, downVotes: challenge.downVotes + 1 };
      }
      return challenge;
    });
    localStorage.setItem("data", JSON.stringify({ challenges: copyData }));
  }
};

export const createChallenge = (challengeOjb: {
  title: string;
  description: string;
  tags: string[];
  upVotes: number;
  downVotes: number;
}) => {
  let data: string | IStore | null = localStorage.getItem("data");
  if (data === null) {
    data = {
      challenges: [],
    };
  } else {
    data = JSON.parse(data) as IStore;
  }
  const { title, description, downVotes, upVotes, tags } = challengeOjb;
  let createdAt = Date.now();
  let id = Date.now().toString(36) + Math.random().toString(36).substr(2);
  const createdBy = localStorage.getItem("employeeId") || "";
  let challenge: IChallenge = {
    title,
    description,
    downVotes,
    upVotes,
    tags,
    id,
    createdAt,
    createdBy,
  };
  if (data && typeof data === "object" && data.challenges) {
    data.challenges.push(challenge);
  }
  localStorage.setItem("data", JSON.stringify(data));
  return data;
};
