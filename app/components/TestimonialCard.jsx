import qouteIcon from "../../public/assets/home/quote.png";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const TestimonialCard = ({ testimonial }) => {
  const { name, details, rating } = testimonial || {};
  return (
    <div className="text-center">
      <div className="flex flex-col items-center mb-5">
        <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
      </div>
      <div className="flex flex-col items-center mb-5">
        <img className="w-12" src={qouteIcon} alt="" />
      </div>

      <p>{details}</p>
      <p className="text-xl text-[#CD9003] mt-2">{name}</p>
    </div>
  );
};

export default TestimonialCard;
