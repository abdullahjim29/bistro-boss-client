import SectionTitle from "../../../components/SectionTitle";
import feturedImg from "../../../../public/assets/home/featured.jpg";
import moment from "moment/moment";

const FeaturedMenu = () => {
    const today = moment().format("LL");
    
  return (
    <div className="relative my-30 py-10">
      <div className="absolute inset-0 bg-fixed bg-cover bg-center z-0 bg-[url(../../../../public/assets/home/featured.jpg)]">
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative z-10 text-white">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      />

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-10/12 mx-auto my-16 ">
        <div className="w-full md:w-1/2">
          <img className="w-full" src={feturedImg} alt="" />
        </div>
        <div className="w-full md:w-8/12 mx-auto text-white">
          <p>{today}</p>
          <h3>WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="border-b-2 rounded-lg py-2 border-[1f2937] px-4 text-white uppercase hover:bg-[#BB8506] hover:text-white mt-6">
            Read more
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FeaturedMenu;
