import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Resume",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <header className="bg-black text-white px-6 sm:px-8 py-4 w-full flex items-center justify-between font-poppins relative z-50">
      <Link to="/" className="text-2xl font-bold z-50">
        <span className="text-[#FF014F] font-[pacifico]">Aditya</span>{" "}
        <span className="text-white font-[pacifico]">Roy</span>
      </Link>

      <nav className="hidden lg:flex gap-6 xl:gap-8 font-semibold text-[16px]">
        {navItems.map((item) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) =>
              isActive
                ? "text-[#FF014F] font-bold"
                : "hover:text-[#FF014F] transition duration-200"
            }
          >
            {item}
          </NavLink>
        ))}
      </nav>

      <Link
        to="/contact"
        className="hidden lg:inline-block bg-[#FF014F] hover:bg-transparent border border-[#FF014F] text-white px-5 py-2 rounded-[12px] font-medium text-[15px] transition"
      >
        Hire Me
      </Link>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden z-50 text-2xl focus:outline-none"
        aria-label="Toggle navigation"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={`absolute top-16 left-0 w-full bg-black px-6 py-4 flex flex-col gap-4 transition-all duration-300 lg:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#FF014F] font-bold"
                : "text-white hover:text-[#FF014F] transition"
            }
          >
            {item}
          </NavLink>
        ))}

        <div className="w-full flex justify-end mt-2">
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#FF014F] px-4 py-2 rounded-md text-white text-sm font-semibold shadow-md hover:bg-[#e60040] transition duration-300"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
