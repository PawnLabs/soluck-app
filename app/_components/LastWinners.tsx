"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import profilePicSvg from "../icons/newProfile.svg";
import { cn } from "../_utils/tw.utils";

interface Winner {
  picId: number;
  color: string;
  amount: number;
}

export const LastWinners = () => {
  const [winners] = useState<Winner[]>([
    { picId: 1, amount: 15, color: "bg-white" },
    { picId: 2, amount: 55, color: "bg-yellow-main" },
    { picId: 2, amount: 32, color: "bg-wheel-purple" },
    { picId: 2, amount: 12, color: "bg-yellow-main" },
    { picId: 2, amount: 15, color: "bg-wheel-red" },
    { picId: 2, amount: 55, color: "bg-yellow-main" },
    { picId: 2, amount: 250, color: "bg-wheel-purple" },
    { picId: 2, amount: 120, color: "bg-white" },
    { picId: 2, amount: 13, color: "bg-wheel-red" },
    { picId: 2, amount: 12, color: "bg-yellow-main" },
    { picId: 2, amount: 44, color: "bg-wheel-purple" },
    { picId: 2, amount: 68, color: "bg-wheel-red" },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const scrollWidth = scrollElement.scrollWidth;
      const animationDuration = scrollWidth * 0.05; // Adjust this value to change speed
      scrollElement.style.setProperty(
        "--animation-duration",
        `${animationDuration}s`,
      );
    }
  }, [winners]);

  return (
    <div className="flex h-full w-full items-center bg-black-main">
      <div className="ml-16 text-lg font-medium text-white">Last Winners</div>
      <div className="relative w-[1560px] overflow-hidden">
        <div
          ref={scrollRef}
          className="flex animate-slide-left gap-4 whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {winners.concat(winners).map((winner, index) => (
            <WinnerRectangle key={index} winner={winner} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[rgba(15,15,15,0.16)] to-[#0F0F0F]"></div>
      </div>
      <div className="flex h-[40px] w-[116px] cursor-pointer items-center justify-center rounded-xl bg-white bg-opacity-[0.08] text-sm text-white">
        View All
      </div>
    </div>
  );
};

interface WinnerRectangleProps {
  winner: Winner;
}

const WinnerRectangle: React.FC<WinnerRectangleProps> = ({ winner }) => {
  return (
    <div className="flex h-[48px] w-[130px] flex-shrink-0 items-center justify-center gap-3 rounded-xl border-[1px] border-black-4 bg-blackish">
      <Image
        src={profilePicSvg}
        alt="Logo"
        width={32}
        height={32}
        className={`rounded-full ${winner.color} p-1`}
      />
      <div className="flex text-sm">
        <div className="text-yellow-main">$</div>
        <div className="text-white">{winner.amount}</div>
      </div>
    </div>
  );
};
