"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import profilePicSvg from "../icons/profilePictures.svg";

interface Winner {
  picId: number;
  amount: number;
}

export const LastWinners = () => {
  const [winners, setWinners] = useState<Winner[]>([
    { picId: 1, amount: 100 },
    { picId: 2, amount: 200 },
    { picId: 2, amount: 200 },
    { picId: 2, amount: 200 },
    { picId: 2, amount: 200 },
    { picId: 2, amount: 200 },
    { picId: 2, amount: 200 },
    { picId: 2, amount: 200 },
    { picId: 2, amount: 200 },
    { picId: 2, amount: 200 },
    { picId: 2, amount: 200 },
    { picId: 2, amount: 200 },
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
          className="animate-slide-left flex gap-4 whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {winners.concat(winners).map((winner, index) => (
            <WinnerRectangle key={index} winner={winner} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[rgba(15,15,15,0.16)] to-[#0F0F0F]"></div>
      </div>
    </div>
  );
};

interface WinnerRectangleProps {
  winner: Winner;
}

const WinnerRectangle: React.FC<WinnerRectangleProps> = ({ winner }) => {
  return (
    <div className="bg-blackish border-black-4 flex h-[48px] w-[130px] flex-shrink-0 items-center justify-center gap-3 rounded-xl border-[1px]">
      <Image
        src={profilePicSvg}
        alt="Logo"
        width={32}
        height={32}
        className=""
      />
      <div className="flex text-sm">
        <div className="text-yellow-main">$</div>
        <div className="">{winner.amount}</div>
      </div>
    </div>
  );
};
