import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

const ResumeSection = () => {
  const education = [
    {
      title: "B.Tech in Computer Science Engineering",
      school: "Supreme Knowledge Foundation Group of Institutions",
      date: "Expected Graduation: 2026 | CGPA: 7/10",
    },
    {
      title: "Senior Secondary (12th)",
      school: "Vivekananda Academy (CBSE), 2021",
      date: "Percentage: 65%",
    },
    {
      title: "Secondary (10th)",
      school: "Vivekananda Academy (CBSE), 2019",
      date: "Percentage: 80%",
    },
  ];

  const experience = [
    {
      company: "Quantum Brize",
      role: "Full Stack Developer Intern",
      date: "June 2025 – Present",
      desc: "Working on MERN stack development, contributing to frontend & backend, API integration, and managing databases.",
    },
    {
      company: "Infosys Springboard",
      role: "Project Developer Intern",
      date: "Oct 2024 – Dec 2024",
      desc: "Built full stack web apps using HTML, CSS, JS (frontend) and Node.js, Express, MySQL (backend).",
    },
  ];

  const certifications = [
    {
      title: "Foundation: Data, Data, Everywhere",
      org: "Google (Coursera)",
      type: "Certificate",
    },
    {
      title: "The Joy of Computing Using Python",
      org: "NPTEL",
      type: "Certificate",
    },
    {
      title: "Ethics in Engineering",
      org: "NPTEL",
      type: "Certificate",
    },
    {
      title: "Enhancing Soft Skills & Personality",
      org: "NPTEL",
      type: "Certificate",
    },
    {
      title: "Project Development Using JAVA for Beginners – 2024",
      org: "Udemy",
      type: "Certificate",
    },
  ];

  const activities = [
    "Participated in several Coding based Hackathons both Online & Offline (Smart India Hackathon, Hack4Bengal, etc.)",
    "Volunteered in College Tech-Fest 2023",
  ];

  return (
    <>
      <Navbar />
      <div className="bg-black text-white px-6 sm:px-10 py-12 min-h-screen font-poppins">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FF014F]">
                Education
              </h2>
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="border-l-2 border-[#FF014F] pl-6 relative"
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-black border-2 border-[#FF014F]" />
                  <h3 className="text-lg sm:text-xl font-bold">{edu.title}</h3>
                  <p className="text-sm text-gray-400">{edu.school}</p>
                  <p className="text-sm text-gray-400">{edu.date}</p>
                </div>
              ))}
            </div>

            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FF014F]">
                Experience
              </h2>
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="border-l-2 border-[#FF014F] pl-6 relative"
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-black border-2 border-[#FF014F]" />
                  <h3 className="text-lg sm:text-xl font-bold">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-gray-400">{exp.role}</p>
                  <p className="text-sm text-gray-400">{exp.date}</p>
                  <p className="text-sm text-gray-300 mt-2">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FF014F]">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="border-l-2 border-[#FF014F] pl-6 relative"
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-black border-2 border-[#FF014F]" />
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.org}</p>
                  <p className="text-sm text-gray-500 italic">{cert.type}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FF014F]">
              Extra-Curricular Activities
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base text-gray-300">
              {activities.map((activity, idx) => (
                <li key={idx}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResumeSection;
