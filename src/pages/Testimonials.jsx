import Testimonial_Card from "../components/Testimonial_Card";
import pfp from "../assets/dumby-data.jpg";
function Testimonials() {
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
      <label className="flex text-3xl w-full gap-2 justify-center p-5  md:text-6xl md:gap-5 ">
        What Our <b className="text-[#7BC24A] underline">Guests</b> Say?
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
