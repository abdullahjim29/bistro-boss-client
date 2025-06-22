import Cover from "../../components/Shared/Cover";
import SectionTitle from "../../components/SectionTitle";
import contactCoverImg from "../../../public/assets/contact/banner.jpg";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdLocationOn } from "react-icons/md";
import { IoTime } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div className="mb-80">
      <Cover
        img={contactCoverImg}
        title={"CONTACT US"}
        description={"Would you like to try a dish?"}
      />

      {/* visit us section */}
      <section className="w-9/12 mx-auto">
        <SectionTitle subHeading={`---Visit Us---`} heading={`OUR LOCATION`} />

        {/* contact details */}
        <div className="grid md:grid-cols-3 gap-5">
          {/* phone */}
          <div className="border-gray-200 border-x border-b pb-4">
            {/* icons */}
            <div className="bg-[#D1A054] text-white text-2xl p-4 flex flex-col items-center">
              <PiPhoneCallFill />
            </div>

            {/* number */}
            <div className="bg-[#F3F3F3] py-10 px-5 text-center w-[90%] mx-auto">
              <h4 className="text-xl uppercase text-black font-medium mb-2">
                PHONE
              </h4>
              <p>+38 (012) 34 56 789</p>
            </div>
          </div>

          {/* location */}
          <div className="border-gray-200 border-x border-b pb-4">
            {/* icons */}
            <div className="bg-[#D1A054] text-white text-2xl p-4 flex flex-col items-center">
              <MdLocationOn />
            </div>

            {/* ADDRESS */}
            <div className="bg-[#F3F3F3] py-10 px-5 text-center w-[90%] mx-auto">
              <h4 className="text-xl uppercase text-black font-medium mb-2">
                ADDRESS
              </h4>
              <p>Bogura, Rajshahi</p>
            </div>
          </div>

          {/* times */}
          <div className="border-gray-200 border-x border-b pb-4">
            {/* icons */}
            <div className="bg-[#D1A054] text-white text-2xl p-4 flex flex-col items-center">
              <IoTime />
            </div>

            {/* WORKING HOURS */}
            <div className="bg-[#F3F3F3] py-10 px-5 text-center w-[90%] mx-auto">
              <h4 className="text-xl uppercase text-black font-medium mb-2">
                WORKING HOURS
              </h4>
              <p>Mon - Fri: 08:00 - 22:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
