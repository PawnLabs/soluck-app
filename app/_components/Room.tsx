import UsersSvg from "../icons/users.svg";
import Image from "next/image";

interface RoomProps {
  room: { id: number; name: string; price: string; users: number };
  isCurrentRoom: boolean;
  onSelect: (id: number) => void;
}

export const Room: React.FC<RoomProps> = ({
  room,
  isCurrentRoom,
  onSelect,
}) => {
  return (
    <div
      className={`flex h-[57px] w-[335px] items-center justify-start ${
        isCurrentRoom
          ? "rounded-xl bg-black text-white"
          : "bg-blackish text-white hover:rounded-xl hover:bg-black"
      } mb-2 cursor-pointer transition-all duration-300 ease-in-out`}
      onClick={() => onSelect(room.id)}
    >
      <div className="ml-4 flex h-[32px] w-[71px] items-center justify-center rounded-xl bg-yellow-main text-sm text-black-main">
        {room.price}
      </div>
      <div className="ml-4 flex-col items-start justify-center first-letter:flex">
        <div className="text-sm text-white">{room.name}</div>
        <div className="text-xs font-normal text-white-gray">
          {room.price + " only game."}
        </div>
      </div>
      <div className="ml-auto mr-4 flex h-[18px] w-[29px] items-center justify-center gap-1 rounded-xl text-sm text-yellow-main">
        {room.users}

        <Image src={UsersSvg} alt="Logo" width={16} height={16} className=" " />
      </div>
    </div>
  );
};
