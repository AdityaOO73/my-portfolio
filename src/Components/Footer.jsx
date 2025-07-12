import { Link } from "react-router-dom";
import { FaAngleDoubleUp } from "react-icons/fa";

const Footer = () => {
  const navLinks = ["About", "Services", "Resume", "Skills", "Projects"];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white px-8 py-6 flex flex-col md:flex-row items-center justify-between font-poppins">
      <div className="text-center md:text-left text-sm md:text-base font-semibold">
        Copyright ©2025,&nbsp;
        <span className="text-[#FF014F] italic font-bold">Aditya Roy.</span>
        &nbsp;All Rights Reserved
      </div>

      <button
        onClick={scrollToTop}
        className="bg-[#FF014F] border border-[#FF014F] text-white rounded-[15px] w-[60px] h-[60px] my-4 md:my-0 flex items-center justify-center hover:bg-transparent  cursor-pointer transition"
      >
        <FaAngleDoubleUp size={24} />
      </button>
      <div className="hidden md:flex gap-6 text-sm md:text-base font-semibold">
        {navLinks.map((link) => (
          <Link
            key={link}
            to={`/${link.toLowerCase()}`}
            className="hover:text-[#FF014F] transition-all"
          >
            {link}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
