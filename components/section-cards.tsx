import { IVideo } from "@/pages";
import Card, { CardSize, CardSizes } from "./card";
import Link from "next/link";

interface SectionCardsProps {
  title: string;
  videos: IVideo[];
  size?: CardSize;
}

const SectionCards = (props: SectionCardsProps) => {
  const { videos = [], title, size = CardSizes.small } = props;
  return (
    <section className="bg-blackish px-4 mt-6">
      <h2 className="text-gray-100 font-bold text-2xl">{title}</h2>
      <div className="flex pt-7 pb-6 mr-3 overflow-x-scroll overflow-y-hidden">
        {videos.map((video, index) => (
          <Link key={index} href={`/video/${video.id}`}>
            <Card {...video} size={size} key={index} id={index} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectionCards;
