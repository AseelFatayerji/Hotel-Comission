import RoomCard from "../components/Room_Card";
import temp from "../assets/temp-room.jpg";

function Room() {
  const rooms = [
    { id: 1, img: temp, name: "Room Name1" },
    { id: 2, img: temp, name: "Room Name2" },
    { id: 3, img: temp, name: "Room Name3" },
    { id: 4, img: temp, name: "Room Name4" },
  ];
  return (
    <div
      id="Rooms"
      className="w-screen h-fit bg-white rounded-t-[3rem] space-y-5 -mt-15 p-5"
    >
      <label className="flex text-6xl w-full gap-5 justify-center p-5">
        Random <b className="text-[#87d551] underline">Insprational</b> Quote
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
