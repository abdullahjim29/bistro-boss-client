import SectionTitle from "../../../components/SectionTitle";
import { BsFillSendFill } from "react-icons/bs";


const ContactForm = () => {
    return (
        <div className="mt-30 w-9/12 mx-auto">
            <SectionTitle subHeading={`---Send Us a Message---`} heading={`CONTACT FORM`}/>

            <form className="bg-[#F3F3F3] p-12">
                <div className="grid md:grid-cols-2 gap-4">
                    {/* name */}
                    <div className="space-y-2">
                        <label className="block">Name*</label>
                        <input className="py-3 px-4 bg-white rounded-md w-full placeholder:text-sm" type="text" name="name" placeholder="Enter your name"/>
                    </div>

                    {/* email */}
                    <div className="space-y-2">
                        <label className="block">Email*</label>
                        <input className="py-3 px-4 bg-white rounded-md w-full placeholder:text-sm" type="email" name="email" placeholder="Enter your Email"/>
                    </div>

                    {/* phone */}
                    <div className="md:col-span-2 space-y-2">
                        <label className="block">Phone*</label>
                        <input className="py-3 px-4 bg-white rounded-md w-full placeholder:text-sm" type="text" name="phone" placeholder="Enter your phone number"/>
                    </div>

                    {/* message */}
                    <div className="md:col-span-2 space-y-2">
                        <label className="block">Message*</label>
                        <textarea className="py-3 px-4 bg-white rounded-md w-full" name="message" cols="30" rows="10" placeholder="Write your message here"></textarea>
                    </div>

                </div>
                    <div className="w-full md:w-2/8 mx-auto mt-10 text-white bg-gradient-to-r from-[#835D23] to-[#B58130] py-2 px-4 flex items-center gap-3">
                    <input className="ml-8" type="submit" value="Send Message" />
                    <BsFillSendFill />
                    </div>
            </form>
        </div>
    );
};

export default ContactForm;