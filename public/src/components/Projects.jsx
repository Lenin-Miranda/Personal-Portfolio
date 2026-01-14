import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaPython } from "react-icons/fa";
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
import { CardContainer, CardBody, CardItem } from "./3DCard";
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
        "A vibrant social media platform where users can share and discover photos of their favorite places, featuring an intuitive interface and interactive community features.",
      image: spots,
      link: "https://lenin-miranda.github.io/se_project_spots/",
      technologies: [
        { icon: <FaHtml5 />, name: "HTML", color: "#E34F26" },
        { icon: <FaCss3 />, name: "CSS", color: "#1572B6" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
      ],
      icon: "🌄",
    },
    {
      name: "To-Do List",
      description:
        "A productivity app designed for efficient task management, offering real-time form validation, a clean and responsive UI, and seamless user experience across devices.",
      image: toDoList,
      link: "https://lenin-miranda.github.io/se_project_todo-app/",
      technologies: [
        { icon: <FaHtml5 />, name: "HTML", color: "#E34F26" },
        { icon: <FaCss3 />, name: "CSS", color: "#1572B6" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
      ],
      icon: "📝",
    },
    {
      name: "WTWR",
      description:
        "A weather application featuring clean UX/UI and responsive design, with seamless API integration and a robust backend built with Node.js, Express, and MongoDB database.",
      image: wtwr,
      link: "https://seprojectreact.vercel.app/",
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
        { icon: <SiExpress />, name: "Express", color: "#000000" },
        { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
      ],
      icon: "🌤️",
    },
    {
      name: "Data Cleaner",
      description:
        "A powerful data analysis tool that transforms and cleans datasets, converting .xlsx to .csv format while intelligently separating addresses into organized columns.",
      image: dataCleaner,
      link: "https://github.com/Lenin-Miranda/csv-cleaner",
      technologies: [{ icon: <FaPython />, name: "Python", color: "#3776AB" }],
      icon: "🧹",
    },
    {
      name: "News App",
      description:
        "A comprehensive news aggregator that enables users to search, save, and organize articles from multiple sources, featuring a modern interface and responsive design.",
      image: news,
      link: "https://lenin-miranda.github.io/News-Explorer/",
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
        { icon: <SiExpress />, name: "Express", color: "#000000" },
      ],
      icon: "📰",
    },
    {
      name: "It Cyberspace",
      description:
        "A professional corporate website for an IT company, elegantly showcasing services, portfolio highlights, and contact information with a clean and modern design aesthetic.",
      image: cyberspace,
      link: "https://it-cyberspace.com/",
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
        { icon: <SiExpress />, name: "Express", color: "#000000" },
      ],
      icon: "🪐",
    },
    {
      name: "Odontools",
      description:
        "A full-stack e-commerce platform for dental equipment featuring secure authentication, inventory control, order processing, and automated email notifications.",
      image: odontools,
      link: "https://github.com/Lenin-Miranda/odontools",
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
        { icon: <SiExpress />, name: "Express", color: "#000000" },
        { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
      ],
      icon: "🛒",
    },
    {
      name: "Task Manager - Mini CRM",
      description:
        "A modern task management application built with Next.js 16 and TypeScript, featuring GitHub authentication, elegant UI with Tailwind and Radix, smooth animations, and PostgreSQL database.",
      image: miniCrm,
      link: "https://task-manager-self-iota.vercel.app/",
      technologies: [
        { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
        { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
        { icon: <SiPrisma />, name: "Prisma", color: "#0C344B" },
        { icon: <SiGraphql />, name: "GraphQL", color: "#E10098" },
        { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
      ],
      icon: "📋",
    },
  ];

  // Mostrar solo 3 proyectos inicialmente o todos si showAll es true
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="projects" data-aos="fade-up" path="projects">
      <CardContainer className="projects__container">
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
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              key={project.name}
            >
              <CardBody className="projects__card" data-aos="fade-left">
                <CardItem className="projects__card-icon">
                  {project.icon}
                </CardItem>
                <CardItem
                  className="projects__card-title"
                  style={{ margin: "0 0 10px" }}
                >
                  {project.name}
                </CardItem>
                <img
                  className="projects__card-image"
                  src={project.image}
                  alt={project.name}
                />
                <CardItem className="projects__card-description">
                  {project.description}
                </CardItem>
                <CardItem className="project__card-tecnology">
                  {project.technologies.map((tech, index) => (
                    <i
                      key={index}
                      className="project__card-tecnologies"
                      style={{
                        color: tech.color,
                      }}
                    >
                      <span className="project__card-tecnology-icon">
                        {tech.icon}
                        {""}
                      </span>
                      <span className="project__card-tecnology-name">
                        {tech.name}
                      </span>
                    </i>
                  ))}
                </CardItem>
              </CardBody>
            </a>
          ))}
        </div>
        {projects.length > 3 && (
          <button
            className="projects__show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More Projects"}
          </button>
        )}
      </CardContainer>
    </section>
  );
}

export default Projects;
