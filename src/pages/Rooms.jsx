import RoomCard from "../components/Room_Card";
import { useSelector } from "react-redux";
function Room() {
  const { rooms, status, error } = useSelector((state) => state.rooms);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  return (
    <div
      id="Rooms"
      className="w-screen h-fit bg-white rounded-t-[3rem] p-5 space-y-5 mt-20 md:-mt-15 "
    >
      <label className="flex w-full justify-center gap-1 px-5 py-15 text-3xl md:text-6xl md:gap-5">
        Random <b className="text-[#87d551] underline"> Insprational </b> Quote
      </label>
      <div className="flex flex-col items-center Poppins gap-5 md:scale-100 md:justify-evenly md:gap-10 md:flex-row">
        {rooms.map((room) => {
          return (
            <div key={room.id}>
              <RoomCard img={room.img} name={room.id} roominfo={room} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Room;
