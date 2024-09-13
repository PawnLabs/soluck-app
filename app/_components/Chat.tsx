import Image from "next/image";
import StrokeSvg from "../icons/stroke.svg";

export const Chat = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="h-full"> </div>
      <div className="flex h-[80px] items-center justify-center gap-4">
        <div className="h-[48px] w-[260px] rounded-xl bg-black">
          <input
            className="h-[48px] w-[260px] rounded-xl bg-black pl-4 focus:outline-none"
            placeholder="Send message..."
          ></input>
        </div>

        <div className="flex h-[48px] w-[68px] cursor-pointer items-center justify-center rounded-xl border-[2px] border-yellow-darkish bg-custom-gradient text-black-main">
          <Image src={StrokeSvg} alt="Arrow Down" width={14} height={13} />
        </div>
      </div>
    </div>
  );
};
