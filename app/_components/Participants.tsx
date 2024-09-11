import { useState } from "react";
import { Participant } from "./Participant";

export const Participants = () => {
  const [participants, setParticipants] = useState([
    { id: 1, name: "John Doe", amount: 100 },
    { id: 2, name: "Fohn Doe", amount: 200 },
    { id: 3, name: "Vohn Doe", amount: 300 },
    { id: 4, name: "7gSf...sCdS", amount: 400 },
    { id: 5, name: "6sjW...skBS", amount: 500 },
  ]);

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
