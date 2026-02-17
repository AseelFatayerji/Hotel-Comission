import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RoomCard({ img, name }) {
  return (
    <div
      className="rounded-2xl h-92 w-72 relative align-bottomp p-5"
      style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      alt={name}
    >
      <div className="text-xl absolute flex justify-between inset-x-0 bottom-0 bg-linear-to-t rounded-b-2xl  from-black to-transparent h-fit p-5">
        <div className="font-bold bg-white rounded-full px-5 py-1 text-center justify-center">{name}</div>
        <button className="text-center"><FontAwesomeIcon icon={faArrowUp} className="rotate-45"/></button>
      </div>
    </div>
  );
}

export default RoomCard;
