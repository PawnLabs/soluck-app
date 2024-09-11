"use client";
import Image from "next/image";
import profilePicSvg from "../icons/profilePictures.svg";

interface ParticipantProps {
  participant: { id: number; name: string; amount: number };
  isEven: boolean;
}

export const Participant: React.FC<ParticipantProps> = ({
  participant,
  isEven,
}) => {
  return (
    <div
      className={`flex h-[56px] w-[335px] items-center justify-start rounded-xl ${isEven ? "bg-white bg-opacity-[0.01]" : "bg-blackish"}`}
    >
      <Image
        src={profilePicSvg}
        alt="Logo"
        width={32}
        height={32}
        className="ml-4"
      />
      <div className="ml-4 flex-grow text-white-gray">{participant.name}</div>
      <div className="mr-4 text-sm text-white">{"$ " + participant.amount}</div>
    </div>
  );
};
