import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function RoomCard({ img, name }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Room/${name}`);
  };

  return (
    <div
      className="rounded-2xl h-92 w-72 relative border-2 border-[#87d551] hover:scale-105 overflow-hidden align-bottomp shadow-[10px_7px_12px_2px_rgba(0,0,0,0.2)] hover:-mt-5 hover:ease-in-out"
    >
      <img src={img} alt={name} className="absolite h-full w-full rounded-xl " />
      <div className="text-xl absolute flex justify-between inset-x-0 bottom-0 bg-linear-to-t rounded-b-2xl  from-black to-transparent h-fit p-5">
        <div className="font-medium bg-white rounded-full px-5 py-1 text-center justify-center">
          {name}
        </div>
        <button className="text-center p-1.5 rounded-full custom-button" onClick={handleClick}>
          <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
        </button>
      </div>
    </div>
  );
}

export default RoomCard;
