import Cover from "../../components/Shared/Cover";
import contactCoverImg from "../../../public/assets/contact/banner.jpg";
import ContactDetails from "./components/ContactDetails";
import ContactForm from "./components/ContactForm";


const ContactUs = () => {
  return (
    <div className="mb-80">
      <Cover
        img={contactCoverImg}
        title={"CONTACT US"}
        description={"Would you like to try a dish?"}
      />

      {/* visit us section */}
      <section>
        <ContactDetails/>
      </section>

      {/* contact form section*/}
      <section>
        <ContactForm/>
      </section>
    </div>
  );
};

export default ContactUs;
