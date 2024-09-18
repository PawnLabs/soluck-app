import { useState } from "react";
import { Participant } from "./Participant";
import { players } from "../_dummyData/players";

export const Participants = () => {
  const [participants, setParticipants] = useState(players);

  return (
    <div>
      {participants.length > 0 ? (
        <div className="ml-4 flex flex-col items-start justify-center gap-3">
          {participants.map((participant, index) => (
            <Participant
              key={participant.id}
              participant={participant}
              isEven={index % 2 === 1}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center text-sm text-white-gray">
          Be the first to join.
        </div>
      )}
    </div>
  );
};
