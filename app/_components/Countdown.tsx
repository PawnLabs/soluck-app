import Image from "next/image";
import CountdownSvg from "../icons/Radial.svg";

export const Countdown = () => {
  return (
    <div className="flex h-[104px] w-[85px] flex-col items-center justify-center">
      {" "}
      <Image src={CountdownSvg} alt="Arrow Down" width={48} height={48} />
      <div className="text-[32px] text-white">00:59</div>
    </div>
  );
};
