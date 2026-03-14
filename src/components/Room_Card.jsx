import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function RoomCard({ img, name, roominfo, isMobile }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Room/${name}`);
  };

  return (
    <div
      className={`rounded-2xl  relative border-2 overflow-hidden align-bottom shadow-[10px_7px_12px_2px_rgba(0,0,0,0.2)]  ${roominfo.Available ? " border-[#87d551] hover:scale-105 hover:-mt-5 hover:ease-in-out" : "border-gray-600 "} ${isMobile ? "h-36 w-60 sm:h-48 sm:w-82 md:w-96 md:h-72":"h-92 w-72"}`}
    >
      <img
        src={img}
        alt={name}
        className={`absolute h-full rounded-xl ${roominfo.Available ? "" : "grayscale"} ${isMobile ? "w-full" : "w-auto"}`}
      />
      {!roominfo.Available && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-red-500 font-bold text-xl md:text-3xl">
          <div className="-rotate-35 p-5 border-4 rounded-xl border-red-500 text-red-500">
            SOLD OUT
          </div>
        </div>
      )}
      {roominfo.Available && (
        <div className="md:text-xl text-md absolute flex justify-between inset-x-0 bottom-0 bg-linear-to-t rounded-b-2xl  from-black to-transparent h-fit p-5">
          <div className="font-medium bg-white rounded-full px-5 py-1 text-center justify-center select-none">
            {name}
          </div>
          <button
            className="text-center p-1.5 rounded-full custom-button"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
          </button>
        </div>
      )}
    </div>
  );
}

export default RoomCard;
