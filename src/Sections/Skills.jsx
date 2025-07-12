import { Icon } from "../Icons/Icon.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

const skills = [
  { name: "HTML5", icon: Icon.htmlIcon },
  { name: "JavaScript", icon: Icon.jsIcon },
  { name: "React JS", icon: Icon.reactIcon },
  { name: "Node JS", icon: Icon.nodeIcon },
  { name: "Express JS", icon: Icon.expressIcon },
  { name: "MongoDB", icon: Icon.mongodbIcon },
  { name: "MySQL", icon: Icon.mysqlIcon },
  { name: "C++", icon: Icon.cppIcon },
  { name: "Java", icon: Icon.javaIcon },
  { name: "Tailwind CSS", icon: Icon.tailwindIcon },
  { name: "Bootstrap", icon: Icon.bootstrapIcon },
  { name: "Vite", icon: Icon.viteIcon },
  { name: "Figma", icon: Icon.figmaIcon },
  { name: "Git", icon: Icon.gitAltIcon },
  { name: "GitHub", icon: Icon.gitIcon },
  { name: "VS Code", icon: Icon.vsCodeIcon },
];

const SkillsSection = () => (
  <>
    <Navbar />

    <section className="bg-black text-white py-16 px-6 min-h-screen font-poppins">
      <div className="text-center mb-12">
        <p className="text-[#FF014F] text-sm uppercase font-medium">
          My Talent
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold">Professional Skills</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-[#1E1E1E] rounded-xl flex flex-col items-center justify-center py-6 px-4 hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(255,1,79,0.35)] transition duration-300"
          >
            <span className="text-4xl sm:text-5xl lg:text-6xl text-[#FF014F]">
              {skill.icon}
            </span>
            <p className="mt-3 text-xs sm:text-sm md:text-base font-medium text-gray-200 text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </>
);

export default SkillsSection;
