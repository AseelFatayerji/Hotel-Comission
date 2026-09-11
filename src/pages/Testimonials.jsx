import Testimonial_Card from "../components/Testimonial_Card";
import pfp from "../assets/dumby-data.jpg";
function Testimonials({isMobile}) {
  const tempData = [
    {
      rating: 4,
      name: "John Does",
      img: pfp,
      review:
        "DUMBY TEXT INSERT HERE Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ",
    },
    {
      rating: 5,
      name: "John Does",
      img: pfp,
      review:
        "DUMBY TEXT INSERT HERE Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ",
    },
    {
      rating: 3,
      name: "John Does",
      img: pfp,
      review:
        "DUMBY TEXT INSERT HERE Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ",
    },
    {
      rating: 2.5,
      name: "John Does",
      img: pfp,
      review:
        "DUMBY TEXT INSERT HERE Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ",
    },
    {
      rating: 3,
      name: "John Does",
      img: pfp,
      review:
        "DUMBY TEXT INSERT HERE Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ",
    },
    {
      rating: 5,
      name: "John Does",
      img: pfp,
      review:
        "DUMBY TEXT INSERT HERE Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ",
    },
    {
      rating: 4,
      name: "John Does",
      img: pfp,
      review:
        "DUMBY TEXT INSERT HERE Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ",
    },
  ];
  return (
    <div className="w-screen bg-white mt-20 mb-10">
      <label
        className={`flex flex-col justify-center font-semibold ${
          isMobile
            ? " px-4 py-5 text-sm gap-1 sm:text-xl sm:gap-2"
            : "pb-5 pl-[10%] text-5xl gap-2"
        }`}
      >
        What Our Guests Say.
        <p className="text-lg font-light text-green-900 md:text-xl">Reviews</p>
      </label>
      <div className="flex px-2 py-4 justify-center md:py-18">
        {/* <!-- Elfsight Google Reviews | LOP Inn Google Reviews --> */}
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div
          className="elfsight-app-ffbd4b5b-5c8d-480b-b5ae-36716c50507c"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
}

export default Testimonials;
