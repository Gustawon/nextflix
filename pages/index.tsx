import NavBar from "@/components/navbar";
import Head from "next/head";
import { NextPage } from "next/types";
import Banner from "@/components/banner";
import { getPopularVideos, getVideos } from "@/lib/videos";
import SectionCards from "@/components/section-cards";
import { CardSizes } from "@/components/card";

export async function getServerSideProps() {
  const disneyVideos: IVideo[] = await getVideos("disney trailer");
  const productivityVideos: IVideo[] = await getVideos("productivity");
  const travelVideos: IVideo[] = await getVideos("travel");
  const popularVideos: IVideo[] = await getPopularVideos();
  return {
    props: { disneyVideos, productivityVideos, travelVideos, popularVideos },
  };
}

export interface IVideo {
  imgUrl: string;
  title: string;
  description: string;
  id: string | number;
}

interface HomeProps {
  disneyVideos: IVideo[];
  productivityVideos: IVideo[];
  travelVideos: IVideo[];
  popularVideos: IVideo[];
}

const Home: NextPage<HomeProps> = (props) => {
  const { disneyVideos, productivityVideos, travelVideos, popularVideos } =
    props;

  return (
    <>
      <Head>
        <title>Nextflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar username="sebastian@email.com" />

      <main className="relative w-full h-screen">
        <Banner
          title="Clifford the red dog"
          subTitle="a very cute dog"
          imgUrl="/static/clifford.webp"
        />

        {/* Sections */}
        <SectionCards
          videos={disneyVideos}
          title="Disney"
          size={CardSizes.large}
        />
        <SectionCards
          videos={travelVideos}
          title="Travel"
          size={CardSizes.small}
        />
        <SectionCards
          videos={productivityVideos}
          title="Productivity"
          size={CardSizes.medium}
        />
        <SectionCards
          videos={popularVideos}
          title="Popular"
          size={CardSizes.small}
        />
      </main>
    </>
  );
};

export default Home;
