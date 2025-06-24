import type { FC, ReactNode } from "react";

interface DescriptionSectionProps {
  children: ReactNode;
}

const DescriptionSection: FC<DescriptionSectionProps> = ({ children }) => {
  return <p className="uppercase max-w-full  sm:px-0 text-center text-black text-[15px] font-light font-inherit">{children}</p>;
};

export default DescriptionSection;
