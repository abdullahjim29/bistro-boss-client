import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="md:flex text-white">
        {/* left */}
        <div className="bg-[#1F2937] text-center grow py-20 space-y-2">
          <h3>CONTACT US</h3>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+8801736242911</p>
          <p>Mon - Fri: 8.00 - 22.00</p>
          <p>Sat - Sun: 10.00 - 23.00</p>
        </div>

        {/* right */}
        <div className="bg-[#111827] grow py-20 text-center space-y-3">
          <h3>Follow US</h3>
          <p>Join us on social media</p>
          <div className="flex justify-center gap-5 my-4 text-2xl">
            <div><FaFacebookF/></div>
            <div><FaInstagram/></div>
            <div><FaTwitter/></div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="bg-black text-center text-white py-3 text-sm">
        <p>Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
