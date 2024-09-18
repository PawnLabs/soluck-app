"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SolSvg from "../icons/sol.svg";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 70,
};

export const Join = () => {
  const [isSol, setIsSol] = useState(false);

  const toggleSwitch = () => setIsSol(!isSol);

  return (
    <div className={"relative flex h-[145px] flex-col"}>
      <div className="flex">
        <div className="relative mb-2 ml-5 h-[60px] w-[216px] rounded-xl border-[1px] border-black-4 bg-blackish py-2 text-white">
          <div className="flex items-start justify-center gap-2 pt-1 text-xs text-white-gray">
            <div className="flex h-[32px] w-[41px] cursor-pointer items-center justify-center rounded-lg bg-black hover:bg-yellow-main hover:text-black-main">
              25%
            </div>
            <div className="flex h-[32px] w-[41px] cursor-pointer items-center justify-center rounded-lg bg-black hover:bg-yellow-main hover:text-black-main">
              50%
            </div>
            <div className="flex h-[32px] w-[41px] cursor-pointer items-center justify-center rounded-lg bg-black hover:bg-yellow-main hover:text-black-main">
              75%
            </div>
            <div className="flex h-[32px] w-[41px] cursor-pointer items-center justify-center rounded-lg bg-black hover:bg-yellow-main hover:text-black-main">
              MAX
            </div>
          </div>
        </div>
        <div className="relative mb-2 ml-auto mr-16 mt-1 flex h-[70px] w-[216px] items-center justify-center gap-2 rounded-xl border-[1px] border-black-4 bg-blackish py-2 text-white">
          <div className="mb-3">Total Bet:</div>
          <div className="mb-3 flex h-[16px] w-[16px] items-center justify-center rounded-full bg-yellow-main text-sm font-medium text-black">
            $
          </div>
          <div className="mb-3 text-xs text-yellow-main">{100}</div>
        </div>
      </div>
      <div className="z-10 mt-[-24px] flex h-[96px] w-[898px] items-center justify-start rounded-xl border-[1px] border-black-4 bg-blackish text-white">
        <div className="ml-4 flex h-[48px] w-[734px] items-center rounded-xl bg-black">
          <div
            className={`relative ml-4 flex h-[28px] w-[56px] cursor-pointer items-center rounded-full bg-white bg-opacity-[0.08] px-[2px] ${
              isSol ? "justify-end" : "justify-start"
            }`}
            onClick={toggleSwitch}
          >
            <motion.div
              className="absolute flex h-[25px] w-[25px] items-center justify-center rounded-full bg-black-main"
              layout
              transition={spring}
            />
            <div
              className={`absolute left-[11px] w-4 text-sm text-yellow-main transition-opacity duration-300 ${
                isSol ? "opacity-30" : "opacity-100"
              }`}
            >
              $
            </div>

            <Image
              src={SolSvg}
              alt="Arrow Down"
              width={12}
              height={12}
              className={`absolute right-[8px] transition-opacity duration-300 ${
                isSol ? "opacity-100" : "opacity-30"
              }`}
            />
          </div>
          <div>
            <input
              className="ml-4 bg-black text-white-gray placeholder-white-gray focus:border-none focus:bg-black focus:outline-none"
              placeholder="Minimum 0.005"
            ></input>
          </div>
        </div>
        <div className="ml-auto mr-6 flex h-[48px] w-[100px] cursor-pointer items-center justify-center rounded-xl border-[2px] border-yellow-darkish bg-custom-gradient text-black-main">
          Join
        </div>
      </div>
    </div>
  );
};
