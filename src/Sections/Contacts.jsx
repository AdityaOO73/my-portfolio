import { Icon } from "../Icons/Icon.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

const ContactSection = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white py-16 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-sm text-gray-400">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-snug mt-2 mb-4">
              Let’s Talk For your <br />
              <span className="text-[#FF014F]">Next Projects</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Discuss a project or just want to say hi? Connect with me via
              email or through a phone call.
            </p>

            <ul className="space-y-3 text-sm sm:text-base mb-6">
              <li className="flex items-center gap-2">
                <span className="text-[#FF014F]">✔</span> MERN Stack Developer
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF014F]">✔</span> Passionate Tech
                Learner
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF014F]">✔</span> Team Player & Mentor
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF014F]">✔</span> React & Node.js
                Projects
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF014F]">✔</span> Open Source
                Enthusiast
              </li>
            </ul>

            <div className="flex gap-4 text-xl">
              <a
                href="https://github.com/AdityaOO73"
                className="bg-[#1E1E1E] p-2 rounded-md text-[#FF014F] hover:bg-[#FF014F] hover:text-white transition"
              >
                {Icon.gitIcon}
              </a>
              <a
                href="http://www.linkedin.com/in/aditya-roy-4194821b2"
                className="bg-[#1E1E1E] p-2 rounded-md text-[#FF014F] hover:bg-[#FF014F] hover:text-white transition"
              >
                {Icon.linkedInIcon}
              </a>
              <a
                href="mailto:adityaroy01@yahoo.com"
                className="bg-[#1E1E1E] p-2 rounded-md text-[#FF014F] hover:bg-[#FF014F] hover:text-white transition"
              >
                {Icon.emailIcon}
              </a>
              <a
                href="https://twitter.com"
                className="bg-[#1E1E1E] p-2 rounded-md text-[#FF014F] hover:bg-[#FF014F] hover:text-white transition"
              >
                {Icon.twitterIcon}
              </a>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-semibold">Full Name</label>
                <input
                  type="text"
                  placeholder="Aditya Roy"
                  className="w-full bg-[#1E1E1E] text-white p-3 rounded-md placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="adityaroy01@yahoo.com"
                  className="w-full bg-[#1E1E1E] text-white p-3 rounded-md placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-semibold">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 9000009432"
                  className="w-full bg-[#1E1E1E] text-white p-3 rounded-md placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-[#1E1E1E] text-white p-3 rounded-md placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-[#1E1E1E] text-white p-3 rounded-md placeholder-gray-400 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#FF014F] border border-[#FF014F] hover:bg-transparent cursor-pointer text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactSection;
