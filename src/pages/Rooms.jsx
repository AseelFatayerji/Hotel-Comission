import RoomCard from "../components/Room_Card";
import Loadings from "../components/Loadings";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useMemo, useEffect } from "react";
import { fetchRooms } from "../Redux/Reducer";

function Room({ isMobile }) {
  const dispatch = useDispatch();
  const { rooms, status, error, unsubscribe } = useSelector(
    (state) => state.rooms,
  );

  useEffect(() => {
    dispatch(fetchRooms());

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [dispatch]);

  const [hoveredId, setHoveredId] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  if (status === "loading") return <Loadings />;
  if (status === "failed") return <p>Error: {error}</p>;

  const availableRooms = useMemo(() => {
    return rooms.filter((room) => room.Available === true);
  }, [rooms]);

  const reorderedRooms = useMemo(() => {
    if (availableRooms.length < 2) return availableRooms;
    const newRooms = [...availableRooms];
    const first = newRooms[0];
    const last = newRooms[newRooms.length - 1];
    newRooms[0] = last;
    newRooms[newRooms.length - 1] = first;
    return newRooms;
  }, [availableRooms]);

  const bentoSpan = (index) => {
    if (index === 0) return "col-span-2 row-span-2";
    if (index === 3) return "col-span-2";
    return "col-span-1 row-span-1";
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / (el.offsetWidth * 0.8));
    setActiveIndex(index);
  };

  const scrollTo = (index) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * (el.offsetWidth * 0.8), behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <div
      id="Rooms"
      className={`w-screen h-fit bg-white py-5 space-y-5 ${
        isMobile
          ? "rounded-t-3xl mt-20 sm:mt-24 md:mt-36"
          : "rounded-t-[3rem] -mt-15"
      }`}
    >
      <label
        className={`flex w-screen justify-center font-semibold capitalize ${
          isMobile
            ? "py-5 text-md gap-1 sm:text-3xl sm:gap-2"
            : "pb-16 pt-10 text-5xl gap-2"
        }`}
      >
        Where
        <b className="text-[#7BC24A] underline"> comfort meets </b> rest and
        productivity.
      </label>

      {isMobile ? (
        <div className="flex flex-col items-center gap-4">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full gap-4 px-[10vw]"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          >
            {[...reorderedRooms].reverse().map((room, index) => (
              <div
                key={room.id}
                className={`
                  snap-center shrink-0 w-[80vw] h-[55vw] sm:w-[70vw] sm:h-[45vw]
                  transition-all duration-300
                  ${activeIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-60"}
                `}
              >
                <RoomCard
                  img={room.img}
                  name={room.id}
                  roominfo={room}
                  isMobile={isMobile}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            {reorderedRooms.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-5 h-2 bg-[#7BC24A]"
                    : "w-2 h-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 grid-rows-2 gap-4 px-8 max-w-7xl mx-auto h-150">
          {reorderedRooms.map((room, index) => (
            <div
              key={room.id}
              className={`
                ${bentoSpan(index)}
                transition-all duration-400 ease-out z-10
                ${
                  hoveredId === null
                    ? ""
                    : hoveredId === room.id
                      ? "scale-[1.04] z-20 brightness-100"
                      : "scale-[0.94] brightness-60"
                }
              `}
              onMouseEnter={() => setHoveredId(room.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <RoomCard
                img={room.img}
                name={room.id}
                roominfo={room}
                isMobile={isMobile}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Room;
