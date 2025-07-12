import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col md:flex-row items-center bg-black text-white p-6 min-h-screen mx-auto">
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <div className="relative w-[300px] h-[400px] sm:w-[360px] sm:h-[460px] md:w-[400px] md:h-[520px] rounded-[24px] overflow-hidden shadow-xl group">
            <motion.div
              className="absolute inset-0 rounded-[24px] border-2 border-transparent bg-gradient-to-br from-[#FF8A9A] via-[#FF3D6D] to-[#FF8A9A] blur-md opacity-30"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            />

            <motion.div
              className="absolute inset-[10px] rounded-[20px] border-2 border-transparent bg-gradient-conic from-[#FF3D6D] via-transparent to-[#FF8A9A] blur-sm opacity-40"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            />
            <div className="absolute inset-[20px] z-10 rounded-[16px] border-[2px] border-[#FF3D6D] bg-black bg-opacity-10 shadow-inner shadow-[#FF3D6D]/30" />

            <div className="relative w-full scale-137 -translate-x-5 translate-y-20 h-full z-20 rounded-[16px] overflow-hidden">
              <img
                src="/aboutpic.png"
                alt="Profile"
                className="w-full  object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-xl font-semibold">About Me</h2>

          <h3 className="text-3xl font-bold leading-snug">
            <span className="text-[#FF014F]">Driven,</span> innovative <br />
            Software <span className="text-[#FF014F]">Engineer</span>
          </h3>

          <p className="text-gray-300">
            I’m Aditya Roy, a passionate full-stack developer with internship
            experience at Quantum Brize and Infosys Springboard. Proficient in
            C++, Java, React, Node.js, and modern databases. I enjoy turning
            complex problems into clean, efficient code and have delivered
            projects such as an AI-powered insurance platform and a charity
            donation website. I’m always up-skilling through hackathons and
            certifications.
          </p>

          <ul className="space-y-2 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <span className="text-[#FF014F]">✔</span>
              Develop highly interactive front-end UIs with React JS
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF014F]">✔</span>
              Build full stack web apps using MERN stack (MongoDB, Express,
              React, Node)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF014F]">✔</span>
              API development and integration with backend services (REST,
              MySQL, MongoDB)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF014F]">✔</span>
              Passionate about problem-solving, hackathons, and continuous
              learning
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutMe;
