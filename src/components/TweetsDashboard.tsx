import { useEffect, useState } from "react";
import twitterService from "services/twitterService";
import { TwitterResponse } from "types/Twitter";
import TweetCard from "./TweetCard";

const TweetsDashboard = () => {
  const [twitterResponse, setTwitterResponse] = useState<TwitterResponse>();

  // this useEffect will run once in PROD
  useEffect(() => {
    const getTweets = async () => {
      const data = await twitterService.getLatestTweets();
      setTwitterResponse(data);
    };

    getTweets();
  }, []);

  const tweetsCards = twitterResponse?.tweetsResponse.map((tweet) => (
    <TweetCard {...tweet} />
  ));

  return (
    <div>
      <div className="w-full text-center">
        <h1 className="text-2xl text-black">Latest Tweets</h1>
      </div>

      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mx-auto">
        {tweetsCards}
      </div>
    </div>
  );
};

export default TweetsDashboard;
