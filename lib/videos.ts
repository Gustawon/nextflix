import { IVideo } from "@/pages";

export const getCommonVideos = async (url: string) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

    const response = await fetch(
      `${BASE_URL}/${url}&maxResults=35&key=${YOUTUBE_API_KEY}`
    );

    const data = await response.json();

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
