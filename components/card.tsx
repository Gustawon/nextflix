import Image from "next/image";
import { useState } from "react";

import cls from "classnames";

import { motion } from "framer-motion";

export enum CardSizes {
  large = "large",
  medium = "medium",
  small = "small",
}

export type CardSize = CardSizes.large | CardSizes.medium | CardSizes.small;

export interface CardProps {
  imgUrl?: string;
  size?: CardSize;
  id: number;
}

const Card = (props: CardProps) => {
  const {
    imgUrl = "/static/clifford.webp",
    size = CardSizes.small,
    id,
  } = props;

  const classMap = {
    large: "lgItem",
    medium: "mdItem",
    small: "smItem",
  };

  const [imgSrc, setImgSrc] = useState(imgUrl);

  const handleOnError = () => {
    setImgSrc(
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
  };

  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };
  return (
    <div className="mr-1 pointer">
      <motion.div
        className={cls(classMap[size], "relative inline-block hover:z-50")}
        whileHover={{ ...scale }}
      >
        <Image
          src={imgSrc}
          alt="image"
          layout="fill"
          onError={handleOnError}
          className="block top-0 bottom-0 right-0 left-0 rounded-md object-cover object-center max-w-full "
        />
      </motion.div>
    </div>
  );
};

export default Card;
