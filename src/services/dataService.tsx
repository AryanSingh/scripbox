import mockData from "../data/mockData.json";
import { IChallenge } from "../types";

function extractData() {
  if (process.env.NODE_ENV === "test") {
    return mockData.challenges;
  }
  let data = JSON.parse(localStorage.getItem("data") as string) as IChallenge[];
  if (data) {
    return data;
  }

  return [];
}

class DataService {
  private challenges: IChallenge[];
  constructor() {
    this.challenges = extractData();
  }

  getChallenges = () => {
    if (process.env.NODE_ENV === "test") {
      return mockData.challenges;
    }
    let data = JSON.parse(
      localStorage.getItem("data") as string
    ) as IChallenge[];
    if (data) {
      return data;
    }

    return [];
  };

  downVote = (id: string) => {
    let copyData = this.challenges.map((challenge) => {
      if (challenge.id === id) {
        return { ...challenge, downVotes: challenge.downVotes + 1 };
      }
      return challenge;
    });
    this.challenges = copyData;
    localStorage.setItem("data", JSON.stringify(this.challenges));
  };

  upVote = (id: string) => {
    let copyData = this.challenges.map((challenge) => {
      if (challenge.id === id) {
        return { ...challenge, upVotes: challenge.upVotes + 1 };
      }
      return challenge;
    });
    this.challenges = copyData;
    localStorage.setItem("data", JSON.stringify(this.challenges));
  };
  createChallenge = (challengeOjb: {
    title: string;
    description: string;
    tags: string[];
    upVotes: number;
    downVotes: number;
  }) => {
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
    this.challenges = [...this.challenges, challenge];
    localStorage.setItem("data", JSON.stringify(this.challenges));
  };
}

let newService = new DataService();

export const getChallenges = newService.getChallenges;
export const upVote = newService.upVote;
export const downVote = newService.downVote;
export const createChallenge = newService.createChallenge;
