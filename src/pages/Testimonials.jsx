import Testimonial_Card from "../components/Testimonial_Card";

function Testimonials() {
  const tempData = [
    {
      rating: 4,
      name: "John Does",
      img: "src/assets/dumby-data.jpg",
      review:
        "DUMBY TEXT INSERT HERE Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ",
    },
    {
      rating: 5,
      name: "John Does",
      img: "src/assets/dumby-data.jpg",
      review:
        "DUMBY TEXT INSERT HERE Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ",
    },
    {
      rating: 3,
      name: "John Does",
      img: "src/assets/dumby-data.jpg",
      review:
        "DUMBY TEXT INSERT HERE Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ",
    },
    {
      rating: 2.5,
      name: "John Does",
      img: "src/assets/dumby-data.jpg",
      review:
        "DUMBY TEXT INSERT HERE Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ",
    },
    {
      rating: 3,
      name: "John Does",
      img: "src/assets/dumby-data.jpg",
      review:
        "DUMBY TEXT INSERT HERE Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ",
    },
    {
      rating: 5,
      name: "John Does",
      img: "src/assets/dumby-data.jpg",
      review:
        "DUMBY TEXT INSERT HERE Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ",
    },
    {
      rating: 4,
      name: "John Does",
      img: "src/assets/dumby-data.jpg",
      review:
        "DUMBY TEXT INSERT HERE Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. ",
    },
  ];
  return (
    <div className="w-screen bg-white mt-20">
      <label className="flex text-3xl w-full gap-2 justify-center p-5  md:text-6xl md:gap-5 ">
        What Our <b className="text-[#87d551] underline">Guests</b> Say?
      </label>
      <div className="flex px-4 py-4 overflow-x-auto carousel md:py-16">
        <div className="group">
          {tempData.map((reviews, index) => {
            return (
              <Testimonial_Card
                key={index}
                name={reviews.name}
                rating={reviews.rating}
                img={reviews.img}
                review={reviews.review}
              />
            );
          })}
        </div>
        <div aria-hidden className="group">
          {tempData.map((reviews, index) => {
            return (
              <Testimonial_Card
                key={index}
                name={reviews.name}
                rating={reviews.rating}
                img={reviews.img}
                review={reviews.review}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
