import api from "services/apiClient";
import { TwitterResponse } from "types/Twitter";

const ENDPOINT_GET_LATEST_TWEETS = "/twitter/tweets/latest";

class TwitterService {
  async getLatestTweets(): Promise<TwitterResponse> {
    const { data } = await api.get<TwitterResponse>(ENDPOINT_GET_LATEST_TWEETS);
    return data;
  }
}

export default new TwitterService();
