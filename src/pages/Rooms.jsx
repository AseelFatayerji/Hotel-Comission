import React from "react";
import RoomCard from "../components/Room_Card";

function Room() {
  const rooms = [
    { id: 1, img: "src/assets/temp-room.jpg", name: "Room Name" },
    { id: 2, img: "src/assets/temp-room.jpg", name: "Room Name" },
    { id: 3, img: "src/assets/temp-room.jpg", name: "Room Name" },
  ];
  return (
    <div id="Rooms" className="w-screen h-fit rounded-t-3xl">
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
