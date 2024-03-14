import { getYoutubeVideoById } from "@/lib/videos";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticPropsContext, NextPage } from "next/types";
import { IVideo } from "..";

interface VideoProps {
  video: IVideo;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const videoId = context.params?.videoId as string;
  const videoArray = await getYoutubeVideoById(videoId);
  return {
    props: {
      video: videoArray.length > 0 ? videoArray[0] : {},
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const listOfVideos = ["4zH5iYM4wJo"];
  const paths = listOfVideos.map((videoId) => ({
    params: { videoId },
  }));

  return { paths, fallback: "blocking" };
}

const Video: NextPage<VideoProps> = ({ video }) => {
  const router = useRouter();
  const videoId = router.query.videoId;

  function handleNavigationBack() {
    router.back();
  }

  console.log("GOT VIDEO: ", video);

  const {
    title,
    publishTime,
    description,
    channelTitle,
    statistics: { viewCount } = { viewCount: 0 },
  } = video;

  return (
    <>
      <Head>
        <title>Nextflix - Video</title>
      </Head>
      <main className="relative w-full h-screen">
        <div
          className="cursor-pointer bg-blackish40 w-full h-full flex flex-col items-center justify-top z-0"
          onClick={handleNavigationBack}
        >
          <div
            className="cursor-default h-5/6 w-3/4 bg-blackish20 z-10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Player */}
            <iframe
              id="ytplayer"
              // type="text/html"
              width="100%"
              height="60%"
              src={`http://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
              // frameborder="0"
              className="rounded-2xl"
            />

            {/* Description */}
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex h-full w-full">
                {/* Column 1 */}
                <div className="relative w-9/12 text-xl flex flex-col">
                  <p className="pb-4 text-green-200">{publishTime}</p>
                  <p className="pb-4 text-4xl">{title}</p>
                  <div className="max-h-[200px] overflow-auto">
                    {description}
                  </div>
                </div>
                {/* Column 2 */}
                <div className="w-3/12">
                  <p className="pb-4">
                    <span className="text-gray-400">Cast: </span>
                    <span>{channelTitle}</span>
                  </p>
                  <p>
                    <span className="text-gray-400">View Count: </span>
                    <span>{viewCount}</span>
                  </p>
                </div>
              </div>
            </div>
            {/* end of Description */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Video;
