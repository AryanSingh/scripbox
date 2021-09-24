export interface IChallenge{
  title: string,
  id: number,
  description: string,
  "createdAt": number,
  "tags": string[],
  "upVotes": number,
  "downVotes": number,
  "createdBy": string
}