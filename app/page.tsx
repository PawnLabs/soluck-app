"use client";
import { useState } from "react";
import { Collapsible } from "./_components/Collapsible";
import { Header } from "./_components/Header";
import { LastWinners } from "./_components/LastWinners";
import { Participants } from "./_components/Participants";
import { Room } from "./_components/Room";
import { GameArea } from "./_components/GameArea";
import { Join } from "./_components/Join";
import { Chat } from "./_components/Chat";

export default function Home() {
  const [currentRoom, setCurrentRoom] = useState(1);
  const [rooms, setRooms] = useState([
    { id: 1, name: "Room 1", price: "$ 5-10", users: 5 },
    { id: 2, name: "Room 2", price: "$ 10-50", users: 10 },
    { id: 3, name: "Room 3", price: "$ 50-100", users: 15 },
  ]);

  const handleRoomSelect = (id: number) => {
    setCurrentRoom(id);
  };

  return (
    <div className="flex h-full w-full flex-col">
      <div className="h-[92px] w-full">
        <Header />
      </div>
      <div className="h-[64px] w-full">
        <LastWinners />
      </div>
      <div className="flex flex-grow">
        <div className="flex h-full w-[511px] flex-col items-center justify-start gap-4 pt-4 text-white">
          <Collapsible style="w-[383px]" h="200px" title="Rooms">
            <div className="flex flex-col items-center justify-center">
              {rooms.map((room) => (
                <Room
                  key={room.id}
                  room={room}
                  isCurrentRoom={currentRoom === room.id}
                  onSelect={handleRoomSelect}
                />
              ))}
            </div>
          </Collapsible>
          <Collapsible style="w-[383px]" h="430px" title="Participants">
            <Participants />
          </Collapsible>
        </div>
        <div className="flex h-full w-[958px] flex-col pt-4">
          <GameArea></GameArea>
          <Join></Join>
        </div>
        <div className="flex h-full w-[511px] items-start justify-center pt-4">
          <Collapsible style="w-[383px] " h="700px" title="Chat">
            <Chat></Chat>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}
