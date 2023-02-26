export interface TweetCardProps {
  id: number;
  authorId: string;
  text: string;
};

type TweetResponse = {
  id: number;
  authorId: string;
  text: string;
};

export type TwitterResponse = {
  tweetsResponse: Array<TweetResponse>;
};

