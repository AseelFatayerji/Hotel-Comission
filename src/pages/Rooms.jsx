import RoomCard from "../components/Room_Card";
import temp from "../assets/temp-room.jpg";

function Room() {
  const rooms = [
    { id: 1, img: temp, name: "Standard" },
    { id: 2, img: temp, name: "Double" },
    { id: 3, img: temp, name: "Delux" },
    { id: 4, img: temp, name: "Superior" },
  ];
  return (
    <div
      id="Rooms"
      className="w-screen h-fit bg-white rounded-t-[3rem] p-5 space-y-5 mt-20 md:-mt-15 "
    >
      <label className="flex w-full justify-center gap-1 p-5 text-3xl md:text-6xl md:gap-5">
        Random <b className="text-[#87d551] underline"> Insprational </b> Quote
      </label>
      <div className="flex flex-col items-center Poppins gap-5 md:scale-100 md:justify-evenly md:gap-10 md:flex-row">
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
