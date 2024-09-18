"use client";
import Image from "next/image";
import profilePicSvg from "../icons/newProfile.svg";
import { cn } from "../_utils/tw.utils";

interface ParticipantProps {
  participant: { id: number; name: string; value: number; color: string };
  isEven: boolean;
}

export const Participant: React.FC<ParticipantProps> = ({
  participant,
  isEven,
}) => {
  return (
    <div
      className={`flex h-[56px] w-[335px] items-center justify-start rounded-xl ${
        isEven ? "bg-white bg-opacity-[0.01]" : "bg-blackish"
      }`}
    >
      <div className={cn("ml-4 rounded-full p-1", participant.color)}>
        <Image
          src={profilePicSvg}
          alt="Logo"
          width={32}
          height={32}
          className={`rounded-full ${participant.color} `}
        />
      </div>
      <div className="ml-4 flex-grow bg-transparent focus:outline-none">
        {participant.name}
      </div>
      <div className="mr-4 text-sm text-white">{"$ " + participant.value}</div>
    </div>
  );
};
