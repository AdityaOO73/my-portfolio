import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

const projects = [
  {
    title: "Online Insurance Management System Using AI",
    category: "Web Application",
    image: "/insurance.png",
    description:
      "A full stack web app to manage insurance policies. Users can add, view, update, or delete appointments with agents using an AI-enhanced experience.",
  },
  {
    title: "Amora Foundation (Charity Donation Website)",
    category: "Website",
    image: "/amora.png",
    description:
      "A responsive donation platform that helps users contribute to causes like child education, healthcare, and disaster relief with a seamless UX.",
  },
  {
    title: "Human Resource Management System",
    category: "Web Application",
    image: "/hrm.png",
    description:
      "An HRMS for tracking employee attendance, leave, payroll, and documentation with full admin capabilities, built using the MERN stack.",
  },
  {
    title: "Personal Portfolio Website",
    category: "Website",
    image: "/portfolio.png",
    description:
      "My own multi-page portfolio showcasing my resume, skills, and projects with responsive design and a clean UI using React and Tailwind CSS.",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <Navbar />
      <section className="bg-black text-white py-16 px-6 min-h-screen font-poppins">
        <div className="text-center mb-14">
          <p className="text-sm text-gray-400 uppercase tracking-wider">
            Latest Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 leading-snug">
            Explore My Popular <span className="text-[#FF014F]">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1E1E1E] p-6 rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,1,79,0.2)] hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-52 object-fil border border-gray-800"
              />
              <p className="text-sm text-[#FF014F] font-semibold mb-1 uppercase">
                {project.category}
              </p>
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-[#FF014F] text-white px-6 py-2 rounded-md text-sm sm:text-base hover:bg-transparent hover:text-[#FF014F] border border-[#FF014F] transition">
            View More Projects →
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectsSection;
