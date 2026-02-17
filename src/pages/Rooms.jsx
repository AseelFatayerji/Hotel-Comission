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
    <div id="Rooms" className="w-screen h-fit bg-white rounded-t-3xl flex justify-evenly gap-10 -mt-10 p-10">
      {rooms.map((room) => {
        return (
          <div key={room.id}>
            <RoomCard img={room.img} name={room.name} />
          </div>
        );
      })}
    </div>
  );
}

export default Room;
