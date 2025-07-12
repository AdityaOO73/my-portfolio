import { Icon } from "../Icons/Icon.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

const services = [
  {
    icon: (
      <span className="text-[#FF014F] text-4xl sm:text-5xl">
        {Icon.globeIcon}
      </span>
    ),
    title: "Web Development",
    description:
      "Modern and mobile-ready websites that ensure your brand's online presence stands out.",
  },
  {
    icon: (
      <span className="text-[#FF014F] text-4xl sm:text-5xl">
        {Icon.figmaIcon}
      </span>
    ),
    title: "UI/UX Design",
    description:
      "Designing intuitive and elegant user interfaces that offer the best user experience.",
  },
  {
    icon: (
      <span className="text-[#FF014F] text-4xl sm:text-5xl">
        {Icon.mobileIcon}
      </span>
    ),
    title: "App Development",
    description:
      "Building fast, secure, and scalable mobile applications tailored to your business needs.",
  },
  {
    icon: (
      <span className="text-[#FF014F] text-4xl sm:text-5xl">
        {Icon.codeIcon}
      </span>
    ),
    title: "API Design / Integration",
    description:
      "Creating robust REST and GraphQL APIs to power seamless frontend-backend communication.",
  },
  {
    icon: (
      <span className="text-[#FF014F] text-4xl sm:text-5xl">
        {Icon.creditCardIcon}
      </span>
    ),
    title: "Payment Integration",
    description:
      "Implementing smooth and secure payment flows for e-commerce, SaaS, and service platforms.",
  },
  {
    icon: (
      <span className="text-[#FF014F] text-4xl sm:text-5xl">
        {Icon.userFriendsIcon}
      </span>
    ),
    title: "Mentorship",
    description:
      "Providing guidance and support to aspiring developers and tech enthusiasts.",
  },
];

const ServicesSection = () => {
  return (
    <>
      <Navbar />

      <section className="bg-black text-white py-16 px-6 min-h-screen font-poppins">
        <div className="text-center mb-14">
          <p className="text-gray-400 text-sm uppercase tracking-wider">
            I like to make things easy and fun
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 leading-snug">
            My <span className="text-[#FF014F]">Special Services</span> For your{" "}
            <br />
            Business <span className="text-[#FF014F]">Development</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1E1E1E] p-6 sm:p-8 rounded-xl flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgba(255,1,79,0.2)] hover:-translate-y-2 transform transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesSection;
