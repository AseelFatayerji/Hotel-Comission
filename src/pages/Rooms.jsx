import React from "react";
import RoomCard from "../components/Room_Card";

function Room() {
  const rooms = [
    { id: 1, img: "src/assets/temp-room.jpg", name: "Room Name1" },
    { id: 2, img: "src/assets/temp-room.jpg", name: "Room Name2" },
    { id: 3, img: "src/assets/temp-room.jpg", name: "Room Name3" },
    { id: 4, img: "src/assets/temp-room.jpg", name: "Room Name4" },
  ];
  return (
    <div
      id="Rooms"
      className="w-screen h-fit bg-white rounded-t-[3rem] space-y-5 -mt-15 p-5"
    >
      <label className="flex text-6xl w-full gap-5 justify-center p-5">
        Random <l className="text-[#87d551] underline">Insprational</l> Quote
      </label>
      <div className="flex justify-evenly gap-10 Poppins">
        {rooms.map((room) => {
          return (
            <div key={room.id}>
              <RoomCard img={room.img} name={room.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Room;
