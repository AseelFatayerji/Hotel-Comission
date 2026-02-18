import {
  faStar,
  faStarAndCrescent,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

function Testimonial_Card({ rating, name, review, img }) {
  const stars = [];
  useEffect(() => {
    if (rating < 5) {
      for (let index = 1; index <= rating; index++) {
        stars.concat(faStar);
      }
      if (rating % 10 == 5) {
        stars.concat(faStarHalfStroke);
        for (let index = rating; index <= 5; index++) {
          stars.concat(faStarAndCrescent);
        }
      } else {
        for (let index = rating; index <= 5; index++) {
          stars.concat(faStarAndCrescent);
        }
      }
    } else {
      for (let index = 1; index <= rating; index++) {
        stars.concat(faStar);
      }
    }
  }, [stars]);
  return (
    <div className="flex flex-col p-5 border-2 border-[#B4B4B4] bg-neutral-100 rounded-lg shrink-0 w-[20rem]">
      <div className="text-[#87d551]">
        {stars.map((star, index) => {
          return <FontAwesomeIcon icon={star} key={index} />;
        })}
      </div>
      <div className="text-md ">{review}</div>
      <div className="w-full border-t  border-[#B4B4B4] my-4"></div>
      <div className="flex gap-5 text-lg items-center">
        <img
          src={img}
          className="rounded-full border-4 border-[#87d551] h-15 w-15"
        />
        <div className="h-fit">{name}</div>
        
      </div>
    </div>
  );
}

export default Testimonial_Card;
