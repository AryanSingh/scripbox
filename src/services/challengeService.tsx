import { useEffect, useState } from "react";
import mockData from "../data/mockData.json";
import { IChallenge, IStore } from "../types";

export const getChallenges = () => {
  let data = JSON.parse(localStorage.getItem("data") as string) as IStore;
  if (data && data.challenges) {
    return data.challenges;
  }

  return [];
};
