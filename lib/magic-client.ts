import { Magic } from "magic-sdk";

const NEXT_PUBLIC_MAGIC_API_KEY = process.env.NEXT_PUBLIC_MAGIC_API_KEY;

const createMagic = () => {
  return (
    typeof window !== "undefined" &&
    new Magic((NEXT_PUBLIC_MAGIC_API_KEY as string) || "")
  );
};

const magic = createMagic();

export default magic;
