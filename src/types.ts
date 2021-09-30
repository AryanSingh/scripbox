export interface IChallenge {
  title: string;
  id: string;
  description: string;
  createdAt: number;
  tags: string[];
  upVotes: string[];
  downVotes: string[];
  createdBy: string;
}
