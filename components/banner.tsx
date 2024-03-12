import Image from "next/image";

interface BannerProps {
  title: string;
  subTitle: string;
  imgUrl: string;
}
const Banner = (props: BannerProps) => {
  const { title, subTitle, imgUrl } = props;

  const handleOnPlay = () => {
    console.log("handleOnPlay");
  };
  return (
    // Container
    <div className="relative w-full h-5/6">
      <div className="absolute w-full h-full z-30">
        <div className="flex flex-col justify-start px-16 h-full mt-24 ">
          {/* Nseries wrapper */}
          <div className="flex">
            {/* First letter */}
            <p className="text-6xl text-red-700 font-extrabold">N</p>
            <p className="text-sm text-gray-400 self-center">S E R I E S</p>
          </div>
          <h3 className="text-6xl font-extrabold text-gray-100">{title}</h3>
          <h3 className="text-2xl">{subTitle}</h3>

          <div className="flex flex-row w-full pt-5 ">
            <button
              className="flex flex-row items-center justify-center rounded-lg w-32 bg-white px-5 py-2"
              onClick={handleOnPlay}
            >
              <Image
                src="/static/play_arrow.svg"
                alt="Play icon"
                width="32"
                height="32"
              />
              <span className="text-gray-600 font-semibold text-center text-lg pl-1">
                Play
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="absolute w-full h-full bottom-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
    </div>
  );
};

export default Banner;
