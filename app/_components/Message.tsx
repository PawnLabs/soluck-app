import React from "react";
import { IMessageTypes } from "../_interfaces/chat.interface";
import { cn } from "../_utils/tw.utils";
import Image from "next/image";
import profilePic from "../icons/newProfile.svg";

interface MessageProps {
  sender: string;
  message: string;
  color: string;
  time: string;
  messageType: IMessageTypes;
}

export const Message: React.FC<MessageProps> = ({
  message,
  messageType,
  color,
  sender,
  time,
}) => {
  if (messageType === IMessageTypes.USER) {
    return (
      <div
        className={cn(
          "ml-auto mr-3 h-auto w-full rounded-xl p-2 text-xs text-white",
        )}
      >
        <div className="flex cursor-pointer items-start justify-end rounded-xl text-white-gray">
          <div className="mr-3 flex w-full flex-col items-center justify-center gap-1">
            <div className="ml-auto">{sender}</div>
            <div className="flex w-full items-center justify-center">
              <div className="ml-3 mr-auto text-white-gray">{time}</div>
              <div
                className={cn(
                  "flex h-auto w-fit rounded-xl bg-yellow-darkish p-2 text-xs text-white",
                )}
              >
                {message}
              </div>
            </div>
          </div>
          <Image
            src={profilePic}
            alt="Arrow Down"
            width={32}
            height={32}
            className={`rounded-full ${color} p-1`}
          />
        </div>
      </div>
    );
  } else if (messageType === IMessageTypes.OTHER_USER) {
    return (
      <div
        className={cn("ml-3 h-auto w-full rounded-xl p-2 text-xs text-white")}
      >
        <div className="flex cursor-pointer items-start justify-center rounded-xl text-white-gray">
          <Image
            src={profilePic}
            alt="Arrow Down"
            width={32}
            height={32}
            className={`rounded-full ${color} p-1`}
          />
          <div className="ml-2 flex w-full flex-col items-center justify-center gap-1">
            <div className="mr-auto">{sender}</div>
            <div className="flex w-full items-center justify-center">
              <div
                className={cn(
                  "flex h-auto rounded-xl bg-black-4 p-2 text-xs text-white",
                )}
              >
                {message}
              </div>
              <div className="ml-auto mr-4 text-white-gray">{time}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={cn("ml-3 h-auto w-full rounded-xl p-2 text-xs text-white")}
      >
        <div className="flex cursor-pointer items-center justify-start gap-1 rounded-xl text-white">
          <Image
            src={profilePic}
            alt="Arrow Down"
            width={22}
            height={22}
            className={`rounded-full ${color} p-1`}
          />

          <div className="ml-1">{sender}</div>
          <div
            className={cn(
              "flex h-auto rounded-xl bg-transparent text-xs text-white-gray",
            )}
          >
            {message}
          </div>
          <div className="ml-auto mr-4 text-white-gray">{time}</div>
        </div>
      </div>
    );
  }
  /*
  return (

    <div
      className={cn("h-auto w-fit rounded-xl p-2 text-xs text-white", {
        "ml-auto": messageType === IMessageTypes.USER,
        "ml-2": messageType !== IMessageTypes.USER,
      })}
    >
      <div className="flex cursor-pointer items-center justify-center rounded-xl text-white-gray">
        {messageType === IMessageTypes.USER ? (
          <div className="flex">
            <Image
              src={profilePic}
              alt="Arrow Down"
              width={32}
              height={32}
              className="rounded-full bg-white p-1"
            />
            <div>{sender}</div>
          </div>
        ) : messageType === IMessageTypes.SYSTEM ? (
          <div className="flex">
            <Image
              src={profilePic}
              className="rounded-full bg-white p-1"
              alt="Arrow Down"
              width={32}
              height={32}
            />
            <div>{sender}</div>
          </div>
        ) : (
          <div className="flex">
            <Image
              src={profilePic}
              className="rounded-full bg-white p-1"
              alt="Arrow Down"
              width={32}
              height={32}
            />
            <div>{sender}</div>
          </div>
        )}
      </div>
      <div
        className={cn("sh-auto flex w-fit rounded-xl p-2 text-xs text-white", {
          "bg-none": messageType === IMessageTypes.SYSTEM,
          "bg-yellow-darkish": messageType === IMessageTypes.USER,
          "bg-black-4": messageType === IMessageTypes.OTHER_USER,
        })}
      >
        {message}
      </div>
    </div>
  );*/
};
