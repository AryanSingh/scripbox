import { useEffect, useState } from "react";
import mockData from "../data/mockData.json";
import { IChallenge } from "../types";

const useGetChallenges = () => {
  const [challengeData, setChallengeData] = useState<IChallenge[]>([]);
  useEffect(() => {
    setChallengeData(mockData.challenges);
  }, []);
  return challengeData;
};

export default useGetChallenges;
