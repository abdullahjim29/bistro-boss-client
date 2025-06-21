import { Link } from "react-router";
import Cover from "./Shared/Cover";

const menuuCard = ({ menues, img, title, description, buttonText }) => {
  return (
    <div className="mb-14">
      {img && <Cover img={img} title={title} description={description} />}
      <div className="grid md:grid-cols-2 gap-x-5 gap-y-10 w-11/12 md:max-w-5xl mx-auto">
        {menues.map((menu) => (
          <div
            key={menu._id}
            className="flex flex-col lg:flex-row gap-x-5 gap-y-3 md:gap-y-0"
          >
            <div>
              <img
                className="w-20 lg:w-28 h-20 lg:h-16 rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px] rounded-tl-[0px]"
                src={menu.image}
                alt=""
              />
            </div>
            <div>
              <h4 className="text-xl font-cinzel text-[#151515]">
                {menu.name} --------------
              </h4>
              <p className="text-sm text-[#737373]">{menu.recipe}</p>
            </div>
            <p className="text-[#BB8506]">${menu.price}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center mt-5">
        <Link>
          <button className="border-b-2 rounded-lg py-2 border-[1f2937] px-4 text-[#1F2937] uppercase hover:bg-[#BB8506] hover:text-white">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default menuuCard;
