import saladImg from "../../../../public/assets/home/slide1.jpg";

const Recommends = () => {
  return (
    <section className="w-11/12 lg:w-5xl mx-auto">
      <div className="text-center w-9/12 md:w-5/12 lg:w-4/12 mx-auto mb-14">
        <p className="text-[#D99904]">---Should Try---</p>

        <h2 className=" uppercase text-2xl py-4 border-y-2 border-[#E8E8E8] my-4 ">
          ceaf recommends
        </h2>
      </div>

      {/* <SectionTitle subHeading={'---Should Try---'} heading={'ceaf recommends'}/> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-y-0">
        <div className="space-y-3 bg-[#f3f3f3] pb-7">
          <img className="w-full h-60 object-cover" src={saladImg} alt="" />
          <h3 className="font-semibold text-center">Caeser Salad</h3>
          <p className="text-[#151515] w-full md:w-10/12 mx-auto text-center">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <div className="flex justify-center">
          <button className="bg-gray-200 text-[#BB8506] px-4 py-2 border-b-3    border-[#BB8506] rounded-lg uppercase hover:bg-[#1F2937] hover:text-[#BB8506] hover:border-none">
            add to cart
          </button>
          </div>
        </div>

        <div className="space-y-3 bg-[#f3f3f3] pb-7">
        <img className="w-full h-60 object-cover" src={saladImg} alt="" />
          <h3 className="font-semibold text-center">Caeser Salad</h3>
          <p className="text-[#151515] w-full md:w-10/12 mx-auto text-center">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <div className="flex justify-center">
          <button className="bg-gray-200 text-[#BB8506] px-4 py-2 border-b-3    border-[#BB8506] rounded-lg uppercase hover:bg-[#1F2937] hover:text-[#BB8506] hover:border-none">
            add to cart
          </button>
          </div>
        </div>

        <div className="space-y-3 bg-[#f3f3f3] pb-7">
        <img className="w-full h-60 object-cover" src={saladImg} alt="" />
          <h3 className="font-semibold text-center">Caeser Salad</h3>
          <p className="text-[#151515] w-full md:w-10/12 mx-auto text-center">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <div className="flex justify-center">
          <button className="bg-gray-200 text-[#BB8506] px-4 py-2 border-b-3    border-[#BB8506] rounded-lg uppercase hover:bg-[#1F2937] hover:text-[#BB8506] hover:border-none">
            add to cart
          </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Recommends;
