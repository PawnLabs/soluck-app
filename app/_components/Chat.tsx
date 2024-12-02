"use client";
import Image from "next/image";
import StrokeSvg from "../icons/stroke.svg";
import { useState } from "react";
import { Message } from "./Message";
import { IMessageTypes, IMessage } from "../_interfaces/chat.interface";

export const Chat = () => {
  const [messages, setMessages] = useState<IMessage[]>([
    {
      sender: "Alice",
      color: "bg-yellow-main",
      message: "Anyone up for a game on room 2?",
      messageType: IMessageTypes.OTHER_USER,
      id: 1,
      time: "2m ago",
    },
    {
      sender: "Bob",
      color: "bg-wheel-purple",
      message: "has joined the room.",
      messageType: IMessageTypes.SYSTEM,
      id: 2,
      time: "1m ago",
    },
    {
      sender: "9i8..7PZ",
      color: "bg-wheel-red",
      message: "has entered to game on room 1.",
      messageType: IMessageTypes.SYSTEM,
      id: 2,
      time: "1m ago",
    },
    {
      sender: "Bob",
      color: "bg-wheel-purple",
      message: "has entered to game on room 1.",
      messageType: IMessageTypes.SYSTEM,
      id: 2,
      time: "1m ago",
    },
    {
      sender: "Bob",
      color: "bg-wheel-purple",
      message: "I'm in!",
      messageType: IMessageTypes.OTHER_USER,
      id: 3,
      time: "now",
    },
    {
      sender: "Alice",
      color: "bg-yellow-main",
      message: "has entered to game on room 1.",
      messageType: IMessageTypes.SYSTEM,
      id: 2,
      time: "now",
    },
    {
      sender: "9i8..7PZ",
      color: "bg-wheel-red",
      message: "Let's see.",
      messageType: IMessageTypes.USER,
      id: 4,
      time: "now",
    },
  ]);

  return (
    <div className="flex h-full flex-col">
      <div className="h-full">
        {messages.map((msg, index) => (
          <Message
            key={index}
            message={msg.message}
            messageType={msg.messageType}
            sender={msg.sender}
            color={msg.color}
            time={msg.time}
          ></Message>
        ))}
      </div>

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
