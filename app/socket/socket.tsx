"use client";
import * as signalR from "@microsoft/signalr";
import { StringDecoder } from "string_decoder";
import {
  closeSignalRConnection,
  startSignalRConnection,
} from "../_providers/signalr.setup";
import { useEffect, useRef, useState } from "react";

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const hasFetched = useRef(false);

  useEffect(() => {
    // Start the SignalR connection when the page mounts
    //addListener();
    if (!hasFetched.current) {
      hasFetched.current = true;
      //addListenerWinner();
      //addListenerEnter();

      startSignalRConnection();
    }
  }, []);

  return <div>{children}</div>;
};
