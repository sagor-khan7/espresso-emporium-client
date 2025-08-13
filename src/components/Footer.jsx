import logo from "../assets/more/logo1.png";
import bgImg1 from "../assets/more/13.jpg";
import bgImg2 from "../assets/more/24.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="bg-white"
      style={{
        backgroundImage: `url(${bgImg1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Main Footer Content */}
      <div className="mt-32 max-w-10/12 md:max-w-9/12 mx-auto py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <div>
            <img
              src={logo}
              alt="Espresso Emporium"
              className="w-[75px] h-[90px]"
            />
            <h3 className="text-[55px] text-[#331A15]">Espresso Emporium</h3>
          </div>
          <p className="my-8 text-xl text-[#1B1A1A]">
            Always ready to be your friend. Come &amp; Contact with us to share
            your memorable moments, to share with your best companion.
          </p>

          {/* Social Icons */}
          <div className="flex text-[#331A15] text-4xl space-x-4">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>

          {/* Contact Info */}
          <div className="mt-8 space-y-4">
            <p className="text-[#1B1A1A text-xl] flex items-center space-x-4">
              <FaPhone className="text-[#331A15] text-xl" />
              <span>+88 01533 333 333</span>
            </p>
            <p className="text-[#1B1A1A text-xl] flex items-center space-x-4">
              <MdEmail className="text-[#331A15] text-xl" />
              <span>info@gmail.com</span>
            </p>
            <p className="text-[#1B1A1A text-xl] flex items-center space-x-4">
              <FaLocationDot className="text-[#331A15] text-xl" />
              <span>72, Wall street, King Road, Dhaka</span>
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-[55px] text-[#331A15]">Connect with Us</h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-[#E3B577] bg-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-[#E3B577] bg-white"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-[#E3B577] bg-white"
            ></textarea>
            <button
              type="submit"
              className="px-5 py-2 border font-rancho cursor-pointer border-[#331A15] text-[#331A15] rounded-full font-medium hover:bg-[#331A15] hover:text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar with Second Background */}
      <div
        className="text-center py-3 text-white font-rancho text-xl"
        style={{
          backgroundImage: `url(${bgImg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        Copyright Espresso Emporium | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
