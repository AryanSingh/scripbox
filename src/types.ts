export interface IChallenge{
  title: string,
  id: string,
  description: string,
  'createdAt': number,
  'tags': string[],
  'upVotes': number,
  'downVotes': number,
  'createdBy': string
}

export interface IStore{
  challenges: IChallenge[]
}
