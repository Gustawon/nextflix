import NavBar from "@/components/navbar";
import Head from "next/head";
import { NextPage } from "next/types";
import Banner from "@/components/banner";

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
      </main>
    </>
  );
};

export default Home;
