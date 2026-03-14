import RoomCard from "../components/Room_Card";
import { useSelector } from "react-redux";
function Room({ isMobile }) {
  const { rooms, status, error } = useSelector((state) => state.rooms);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  return (
    <div
      id="Rooms"
      className={`w-screen h-fit bg-white  py-5 space-y-5  ${isMobile ? "rounded-t-3xl mt-20 sm:mt-24 md:mt-36" : "rounded-t-[3rem] -mt-15 "}`}
    >
      <label
        className={`flex w-screen justify-center font-semibold capitalize ${isMobile ? "py-5 text-md gap-1 sm:text-3xl sm:gap-2 " : "pb-16 pt-10 text-5xl gap-2"}`}
      >
        Where
        <b className="text-[#87d551] underline"> comfort meets </b> rest and
        productivity.
      </label>
      <div className={`flex items-center Poppins  ${isMobile ? "gap-5 flex-col" : "gap-10 justify-evenly "}`}>
        {rooms.map((room) => {
          return (
            <div key={room.id}>
              <RoomCard img={room.img} name={room.id} roominfo={room} isMobile={isMobile} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Room;
