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
      <label className="flex w-full justify-center font-semibold gap-1 px-5 pt-10 pb-16 text-xl md:text-5xl md:gap-2 capitalize">
        Where
        <b className="text-[#87d551] underline"> comfort meets </b> rest and
        productivity.
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
