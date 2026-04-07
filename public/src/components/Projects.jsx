import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiGraphql,
  SiPostgresql,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";

import spots from "../assets/spots.png";
import toDoList from "../assets/todoList.png";
import wtwr from "../assets/wtwr-bg.png";
import dataCleaner from "../assets/data-bg.png";
import news from "../assets/news-bg.png";
import cyberspace from "../assets/cyberspace.png";
import odontools from "../assets/odontools.png";
import miniCrm from "../assets/mini-crm.png";

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      name: "Spots",
      description:
        "Social platform to share and discover photos of your favorite places.",
      image: spots,
      link: "https://lenin-miranda.github.io/se_project_spots/",
      github: "https://github.com/Lenin-Miranda/se_project_spots",
      technologies: [
        { icon: <FaHtml5 />, name: "HTML", color: "#E34F26" },
        { icon: <FaCss3 />, name: "CSS", color: "#1572B6" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
      ],
    },
    {
      name: "To-Do List",
      description:
        "Task manager with real-time form validation and a responsive UI.",
      image: toDoList,
      link: "https://lenin-miranda.github.io/se_project_todo-app/",
      github: "https://github.com/Lenin-Miranda/se_project_todo-app",
      technologies: [
        { icon: <FaHtml5 />, name: "HTML", color: "#E34F26" },
        { icon: <FaCss3 />, name: "CSS", color: "#1572B6" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
      ],
    },
    {
      name: "WTWR",
      description: "Weather app with clean UX and a Node.js + MongoDB backend.",
      image: wtwr,
      link: "https://seprojectreact.vercel.app/",
      github: null,
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
        { icon: <SiExpress />, name: "Express", color: "#888" },
        { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
      ],
    },
    {
      name: "Data Cleaner",
      description:
        "Python tool that converts .xlsx to .csv and organizes address data.",
      image: dataCleaner,
      link: "https://github.com/Lenin-Miranda/csv-cleaner",
      github: "https://github.com/Lenin-Miranda/csv-cleaner",
      technologies: [{ icon: <FaPython />, name: "Python", color: "#3776AB" }],
    },
    {
      name: "News App",
      description:
        "News aggregator to search and save articles from multiple sources.",
      image: news,
      link: "https://lenin-miranda.github.io/News-Explorer/",
      github: "https://github.com/Lenin-Miranda/News-Explorer",
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
        { icon: <SiExpress />, name: "Express", color: "#888" },
      ],
    },
    {
      name: "It Cyberspace",
      description:
        "Corporate website for an IT company showcasing services and portfolio.",
      image: cyberspace,
      link: "https://it-cyberspace.com/",
      github: null,
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
        { icon: <SiExpress />, name: "Express", color: "#888" },
      ],
    },
    {
      name: "Odontools",
      description:
        "E-commerce platform for dental equipment with auth, inventory, and orders.",
      image: odontools,
      link: "https://github.com/Lenin-Miranda/odontools",
      github: "https://github.com/Lenin-Miranda/odontools",
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
        { icon: <SiExpress />, name: "Express", color: "#888" },
        { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
      ],
    },
    {
      name: "Task Manager",
      description:
        "Task management app with GitHub auth, Next.js 16, and PostgreSQL.",
      image: miniCrm,
      link: "https://task-manager-self-iota.vercel.app/",
      github: null,
      technologies: [
        { icon: <SiNextdotjs />, name: "Next.js", color: "#fff" },
        { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
        { icon: <SiPrisma />, name: "Prisma", color: "#0C344B" },
        { icon: <SiGraphql />, name: "GraphQL", color: "#E10098" },
        { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
      ],
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="projects" data-aos="fade-up" path="projects">
      <div className="projects__container">
        <h2 className="projects__title">
          Projects &{" "}
          <span className="text-blue-500 dark:text-blue-500">Work</span>
        </h2>
        <p className="projects__subtitle">
          A selection of projects that demonstrate my ability to design, build,
          and deploy modern web applications from concept to completion.
        </p>
        <div className="projects__cards">
          {displayedProjects.map((project) => (
            <div
              className="projects__card"
              key={project.name}
              data-aos="fade-up"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__card-image-link"
              >
                <img
                  className="projects__card-image"
                  src={project.image}
                  alt={project.name}
                />
              </a>
              <div className="projects__card-body">
                <h3 className="projects__card-title">{project.name}</h3>
                <p className="projects__card-description">
                  {project.description}
                </p>
                <div className="projects__card-tech">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="projects__tech-badge"
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="projects__card-actions">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__btn projects__btn--live"
                  >
                    <FiExternalLink /> View Project
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__btn projects__btn--github"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {projects.length > 6 && (
          <button
            className="projects__show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More Projects"}
          </button>
        )}
      </div>
    </section>
  );
}

export default Projects;
