import { IVideo } from "@/pages";

// import disneyVideosTestData from "../data/videos-disney.json";
// import popularVideosTestData from "../data/videos-popular.json";
import productivityVideosTestData from "../data/videos-productivity.json";
// import travelVideosTestData from "../data/videos-travel.json";

const fetchVideos = async (url: string) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

  const response = await fetch(
    `${BASE_URL}/${url}&maxResults=15&key=${YOUTUBE_API_KEY}`
  );

  return await response.json();
};

export const getCommonVideos = async (url: string) => {
  try {
    const DEVELOPMENT = process.env.NEXT_PUBLIC_DEVELOPMENT;
    console.log({ DEVELOPMENT });

    // TODO implement development test data fetching depending on url
    const data = DEVELOPMENT
      ? productivityVideosTestData
      : await fetchVideos(url);

    if (data?.error) {
      console.error("Youtube API error", data.error);
      return [];
    }

    // fix return data type from google api - or
    // todo implement data fetching with GraphQL
    return data.items.map((item: any) => {
      const id = item.id?.videoId || item.id;
      return {
        title: item.snippet.title,
        description: item.snippet.description,
        imgUrl: item.snippet.thumbnails.high.url,
        id,
      } as IVideo;
    });
  } catch (error) {
    console.error("Sth went wrong with video library..", error);
    return [];
  }
};

export const getVideos = (searchQuery: string) => {
  const URL = `search?part=snippet&type=video&q=${searchQuery}`;

  return getCommonVideos(URL);
};

export const getPopularVideos = () => {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US`;

  return getCommonVideos(URL);
};
