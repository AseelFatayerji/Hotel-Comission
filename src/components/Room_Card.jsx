import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function RoomCard({ img, name, roominfo, isMobile }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => roominfo.Available && navigate(`/Room/${name}`)}
      className={`
        relative rounded-3xl overflow-hidden cursor-pointer
        h-full w-full
        transition-all duration-500 ease-out
        ${
          roominfo.Available
            ? `shadow-2xl ${isHovered ? "shadow-[0_20px_60px_-15px_rgba(135,213,81,0.4)]" : "shadow-[10px_7px_12px_2px_rgba(0,0,0,0.2)]"}`
            : "shadow-lg"
        }
        ${isMobile ? "h-36 w-60 sm:h-48 sm:w-82 md:w-96 md:h-72" : ""}
      `}
    >
      <img
        src={img}
        alt={name}
        className={`
          absolute inset-0 h-full w-full object-cover
          transition-transform duration-700 ease-out
          ${isHovered ? "scale-110" : "scale-100"}
          ${!roominfo.Available ? "brightness-50" : ""}
        `}
      />
      <div
        className={`
          absolute inset-0 bg-linear-to-t transition-opacity duration-500
          ${
            isHovered
              ? "from-black/80 via-black/30 to-transparent"
              : "from-black/60 via-transparent to-transparent"
          }
        `}
      />
      {!roominfo.Available && (
        <div className={`absolute inset-0 flex items-center justify-center ${name == "Deluxe Suite" ? "scale-200":""}`}>
          <div className="-rotate-12 p-4 border-2 rounded-2xl border-red-500/60 bg-red-500/10 backdrop-blur-sm">
            <span className="text-red-400 font-semibold text-lg tracking-widest uppercase">
              Fully Booked
            </span>
          </div>
        </div>
      )}
      {roominfo.Available && (
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur text-gray-900 px-3 py-1 rounded-full text-sm font-medium shadow-md">
            {roominfo.Price} $
            <span className="font-normal text-gray-500">/night</span>
          </div>

          <h3 className="text-white text-xl font-semibold mb-3 relative inline-block w-fit">
            {name}
            <span
              className={`
                absolute bottom-0 left-0 h-0.5 bg-[#87d551]
                transition-all duration-500
                ${isHovered ? "w-full" : "w-0"}
              `}
            />
          </h3>
          <div
            className={`
              flex items-center justify-end
              transition-all duration-300
              ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
            `}
          >
            <button
              className="flex items-center rounded-full border-2 py-1.5 px-2 gap-2 border-[#87d551] custom-button "
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/Room/${name}`);
              }}
            >
              View Details
              <FontAwesomeIcon icon={faArrowUp} className="rotate-45 text-sm" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomCard;
