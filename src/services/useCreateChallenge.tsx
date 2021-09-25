import React, {useState, useEffect} from 'react';
import {IChallenge, IStore} from "../types";

const useCreateChallenge = () => {
  let data: string|IStore|null = localStorage.getItem('data');
  if (data === null){
    data = {
      challenges: []
    }
  } else {
    data = JSON.parse(data) as IStore;
  }

  const createChallenge = (challengeOjb: {title: string, description: string, tags: string[], upVotes: number, downVotes: number, createdBy: string}) => {
    const {title, description, createdBy, downVotes, upVotes, tags} = challengeOjb;
    let createdAt = Date.now();
    let id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    let challenge: IChallenge = {
      title, description, createdBy, downVotes, upVotes, tags, id, createdAt
    }
    if(data && typeof data === 'object' && data.challenges){
      data.challenges.push(challenge);
    }
    localStorage.setItem('data', JSON.stringify(data));
    return data;
  }

  return {createChallenge};

}

// export interface IChallenge{
//   title: string,
//   id: number,
//   description: string,
//   'createdAt': number,
//   'tags': string[],
//   'upVotes': number,
//   'downVotes': number,
//   'createdBy': string
// }
