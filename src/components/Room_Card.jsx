import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function RoomCard({ img, name, roominfo }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Room/${name}`, { state: { room: roominfo } });
  };

  return (
    <div
      className={`rounded-2xl h-36 w-60 relative border-2 overflow-hidden align-bottomp shadow-[10px_7px_12px_2px_rgba(0,0,0,0.2)] md:h-92 md:w-72 ${roominfo.Available ? " border-[#87d551] hover:scale-105 hover:-mt-5 hover:ease-in-out" : "border-gray-600 "}`}
    >
      <img
        src={img}
        alt={name}
        className={`absolute h-full rounded-xl ${roominfo.Available ? "" : "grayscale"}`}
      />
      {!roominfo.Available && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-red-500 text-3xl font-bold ">
          <div className="-rotate-35 p-5 border-4 rounded-xl border-red-500 text-red-500">
            SOLD OUT
          </div>
        </div>
      )}
      {roominfo.Available && (
        <div className="md:text-xl text-md absolute flex justify-between inset-x-0 bottom-0 bg-linear-to-t rounded-b-2xl  from-black to-transparent h-fit p-5">
          <div className="font-medium bg-white rounded-full px-5 py-1 text-center justify-center">
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
