import { FaClock, FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import logo from "../assets/footer_logo.webp"
import { FaX } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className=" bg-[#181818] text-gray-300 p-10">
            <div className="footer sm:footer-horizontal">
                <aside>
                    <img className="w-[220px]" src={logo} alt="Website Footer Logo" />
                    <p className="text-sm leading-7">
                        Your kindness brings warmth to those in need.
                    </p>
                    <p className="text-sm leading-7">
                        Thank you for making a difference!
                    </p>
                </aside>
                <nav>
                    <h6 className="text-[16px] font-semibold tracking-wider">Contact Informations</h6>
                    <p className="tracking-widest flex items-center gap-2">
                        <FaPhoneAlt size={15} /> +8801234567890
                    </p>
                    <p className="tracking-wider flex items-center gap-2">
                        <FaEnvelope size={15} /> warmhugdonate@gmail.com
                    </p>
                    <p className="flex items-center gap-2 tracking-wide">
                        <FaMapMarkerAlt size={14} /> Dhaka, Bangladesh
                    </p>
                    <p className="flex items-center gap-2 tracking-wide">
                        <FaClock size={14} /> Mon - Fri: 9 AM - 6 PM
                    </p>
                </nav>
                <nav>
                    <h6 className="text-[16px] font-semibold tracking-wider">Social Media Links</h6>

                    <div className="flex items-center gap-5">
                        <a href="https://facebook.com/" target="_blank" className="link link-hover hover:text-[#1E3A8A] transition">
                            <FaFacebook size={20} />
                        </a>
                        <a href="https://youtube.com/" target="_blank" className="link link-hover hover:text-[#1E3A8A] transition">
                            <FaYoutube size={20} />
                        </a>
                        <a href="https://x.com/" target="_blank" className="link link-hover hover:text-[#1E3A8A] transition">
                            <FaX size={20} />
                        </a>
                    </div>
                </nav>
            </div>

            <div className="footer footer-center mt-6">
                <a className="text-center link link-hover text-[14px]">© 2025 WarmHug. All rights reserved.</a>
            </div>

        </footer>
    );
};

export default Footer;