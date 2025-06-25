import Image from "next/image";
import type { FC } from "react";

interface LogoProps {
  srcImg: string;
  altImg: string;
}

const Logo: FC<LogoProps> = ({ srcImg, altImg }) => {
  return (
    <a href="#">
      <Image className="size-10" src={srcImg} alt={altImg} />
    </a>
  );
};

export default Logo;
