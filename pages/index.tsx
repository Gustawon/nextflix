import NavBar from "@/components/navbar";
import { roboto_slab } from "./_app";
import Head from "next/head";
import { NextPage } from "next/types";

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

      <main className={"pb-4"}>
        <div className={`${roboto_slab.className}`}>NEXTFLIX - div styling</div>
        <div>NEXTFLIX - default app styling</div>
        <div>Netflix</div>
      </main>
    </>
  );
};

export default Home;
