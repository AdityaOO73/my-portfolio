import { Icon } from "../Icons/Icon.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-16 bg-black text-white font-poppins overflow-x-hidden"
      >
        <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">
          <p className="uppercase tracking-widest text-sm sm:text-base">
            Hello, My Name Is
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-[#FF014F]">Aditya</span>{" "}
            <span className="text-white">Roy</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium">
            Software Engineer
          </h2>
          <p className="text-sm sm:text-base md:text-lg max-w-lg text-gray-300 mx-auto md:mx-0">
            From West Bengal, India. I have rich experience in development cycle
            for dynamic web projects based on MERN or MEAN Tech Stack, and I am
            also knowledgeable in UX/UI designing tools like Figma.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="/aditya_CV.pdf"
              download
              className="cursor-pointer bg-[#FF014F] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-[10px] text-sm sm:text-base font-semibold hover:bg-transparent border border-[#FF014F] hover:border-[#FF014F] transition"
            >
              Download Resume
            </a>
            <button
              onClick={() => navigate("/contact")}
              className="cursor-pointer border border-[#FF014F] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-[10px] text-sm sm:text-base font-semibold hover:bg-[#FF014F] transition"
            >
              Contact Me
            </button>
          </div>

          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <a
              href="https://github.com/AdityaOO73"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer bg-[#1f1f1f] p-3 text-2xl sm:text-3xl rounded-md text-[#FF014F] hover:text-white"
            >
              <span>{Icon.gitIcon}</span>
            </a>
            <a
              href="http://www.linkedin.com/in/aditya-roy-4194821b2"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer bg-[#1f1f1f] p-3 text-2xl sm:text-3xl rounded-md text-[#FF014F] hover:text-white"
            >
              <span>{Icon.linkedInIcon}</span>
            </a>
            <a
              href="mailto:adityaroy01@yahoo.com"
              className="cursor-pointer bg-[#1f1f1f] p-3 text-2xl sm:text-3xl rounded-md text-[#FF014F] hover:text-white"
            >
              <span>{Icon.emailIcon}</span>
            </a>
            <a
              href="https://x.com/ADITYAR48796380"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer bg-[#1f1f1f] p-3 text-2xl sm:text-3xl rounded-md text-[#FF014F] hover:text-white"
            >
              <span>{Icon.twitterIcon}</span>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <div
            className="relative 
  w-[80vw] h-[80vw] 
  sm:w-[65vw] sm:h-[65vw] 
  md:w-[50vw] md:h-[50vw] 
  lg:w-[40vw] lg:h-[40vw] 
  xl:w-[34vw] xl:h-[34vw] 
  max-w-[600px] max-h-[600px] 
  rounded-full"
          >
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-tr from-[#ff8a9a] via-transparent to-[#ff3d6d] blur-md opacity-30"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
            />

            <motion.div
              className="absolute inset-[6%] rounded-full border-2 border-transparent bg-gradient-conic from-[#ff3d6d] via-transparent to-[#ff8a9a] blur-md opacity-40"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            />

            <motion.div
              className="absolute inset-[12%] rounded-full border-2 border-transparent bg-gradient-to-tr from-[#ff5e7d] via-transparent to-[#ff8a9a] blur-sm opacity-40"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 14 }}
            />

            <div className="absolute inset-[16%] rounded-full border-[3px] border-[#FF3D6D] z-10 shadow-[0_0_30px_rgba(255,61,109,0.4)]" />
            <div className="relative w-full h-full rounded-full overflow-hidden z-20">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Hero;
