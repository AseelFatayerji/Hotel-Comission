function RoomCard({ img, name }) {
  return (
    <div
      className="rounded-2xl h-92 w-72 relative align-bottomp p-5"
      style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      alt={name}
    >
      <div className="text-xl absolute inset-x-0 bottom-0 space-y-2 bg-linear-to-t rounded-b-2xl  from-black to-transparent h-fit p-5">
        <div className="font-bold text-white">{name}</div>
        <button className="self-end">View Room</button>
      </div>
    </div>
  );
}

export default RoomCard;
