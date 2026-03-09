import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const rooms = [
  {
    name: "Standard Suite",
    description:
      'Our Standard Suites offer a spacious, elegant, and comfortable stay with sweeping urban views. The queen-size bed is dressed in 100% cotton bedding, complemented by a well-appointed private bathroom and a 43" TV for a relaxing evening in.',
    img: "https://your-image-url.com/suite2.jpg",
    beds: 1,
    bathrooms: 1,
    guests: 2,
    size: 31,
    price: 90,
    quantity: 4,
    requirements: "",
    available: true,
  },
  {
    name: "Double Suite",
    description:
      'Ideal for up to four guests, our Double Suites deliver a spacious and elegant stay with stunning urban views. Two full-size beds dressed in 100% cotton bedding ensure a restful night, alongside a well-appointed private bathroom and a 43" TV.',
    img: "https://ik.imagekit.io/sas2seqly/LopInn/Double.jpg",
    beds: 2,
    bathrooms: 1,
    guests: 4,
    size: 31,
    price: 105,
    quantity: 4,
    requirements: "",
    available: true,
  },
  {
    name: "Deluxe Suite",
    description:
      'Located on the ground floor, our Deluxe Suite offers an elegant and comfortable stay for two, with a pleasant view of the golf course. Two full-size beds are dressed in 100% cotton bedding, accompanied by a neat, private bathroom and a 43" TV.',
    img: "https://ik.imagekit.io/sas2seqly/LopInn/Deluxe.jpg",
    beds: 2,
    bathrooms: 1,
    guests: 4,
    size: 31,
    price: 100,
    quantity: 1,
    requirements: "Email only",
    available: true,
  },
  {
    name: "Superior Suite",
    description:
      'Our Superior Suite offers an elegant and comfortable stay for two, with a pleasant view of the golf course. A king-size bed dressed in 100% cotton bedding, a neat private bathroom, and a 43" TV come together to create a refined and restful experience.',
    img: "https://ik.imagekit.io/sas2seqly/LopInn/Superior.jpg",
    beds: 1,
    bathrooms: 1,
    guests: 2,
    size: 31,
    price: 120,
    quantity: 6,
    requirements: "",
    available: true,
  },
];

const seedDB = async () => {
  for (const room of rooms) {
    const docRef = await addDoc(collection(db, "Suites"), room);
    console.log("Added room:", docRef.id);
  }
};

export { seedDB };
