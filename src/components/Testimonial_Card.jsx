import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as Empty } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Testimonial_Card({ rating, name, review, img }) {
  const stars = [];

  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(faStar);
  }
  if (hasHalf) stars.push(faStarHalfStroke);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(Empty);
  }

  return (
    <div className="flex flex-col py-2 px-5 border-2 border-[#B4B4B4] bg-neutral-100 rounded-2xl shrink-0 w-[20rem]">
      <div className="text-[#87d551] gap-2 flex py-3 text-xl">
        {stars.map((star, index) => {
          return <FontAwesomeIcon icon={star} key={index} />;
        })}
      </div>
      <div className="text-sm">{review}</div>
      <div className="w-full border-t  border-[#B4B4B4] my-4"></div>
      <div className="flex gap-5 text-lg items-center py-2">
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
