import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Hero from "../Sections/Hero";
import AboutMe from "../Sections/About.jsx";
import ServicesSection from "../Sections/Service.jsx";
import ResumeSection from "../Sections/Resume.jsx";
import SkillsSection from "../Sections/Skills.jsx";
import ProjectsSection from "../Sections/Projects.jsx";
import ContactSection from "../Sections/Contacts.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/about", element: <AboutMe /> },
      { path: "/services", element: <ServicesSection /> },
      { path: "/resume", element: <ResumeSection /> },
      { path: "/skills", element: <SkillsSection /> },
      { path: "/projects", element: <ProjectsSection /> },
      { path: "/contact", element: <ContactSection /> },
    ],
  },
]);
