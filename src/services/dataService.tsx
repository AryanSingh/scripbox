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
  private challenges: (
    | {
        createdAt: number;
        createdBy: string;
        description: string;
        upVotes: number | string[];
        id: string;
        title: string;
        tags: string[];
        downVotes: number;
      }
    | {
        createdAt: number;
        createdBy: string;
        description: string;
        upVotes: number;
        id: string;
        title: string;
        tags: string[];
        downVotes: string[];
      }
    | IChallenge
  )[];
  constructor() {
    // @ts-ignore
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

  downVote = (id: string, employeeId: string) => {
    let copyData = this.challenges.map((challenge) => {
      if (
        challenge.id === id &&
        //@ts-ignore
        challenge.downVotes.indexOf(employeeId) === -1
      ) {
        //@ts-ignore
        let upvoteIndex = challenge.upVotes.indexOf(employeeId);
        if (upvoteIndex === -1) {
          // do nothign
        } else {
          //@ts-ignore
          challenge.upVotes.splice(upvoteIndex, 1);
        }
        //@ts-ignore
        challenge.downVotes.push(employeeId);
      }
      return challenge;
    });
    this.challenges = copyData;
    localStorage.setItem("data", JSON.stringify(this.challenges));
  };

  upVote = (id: string, employeeId: string) => {
    // let args = arguments;
    console.log("args", id, employeeId);
    let copyData = this.challenges.map((challenge) => {
      let challengeCopy = { ...challenge };
      if (
        challengeCopy.id === id &&
        //@ts-ignore
        challengeCopy.upVotes.indexOf(employeeId) === -1
      ) {
        //@ts-ignore
        let downvoteIndex = challengeCopy.downVotes.indexOf(employeeId);
        if (downvoteIndex === -1) {
        } else {
          //@ts-ignore
          challengeCopy.downVotes.splice(downvoteIndex, 1);
        }
        //@ts-ignore
        challengeCopy.upVotes.push(employeeId);

        return challengeCopy;
      }

      return challengeCopy;
    });
    //@ts-ignore
    this.challenges = copyData;
    localStorage.setItem("data", JSON.stringify(this.challenges));
  };
  createChallenge = (challengeOjb: {
    title: string;
    description: string;
    tags: string[];
    upVotes: string[];
    downVotes: string[];
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
