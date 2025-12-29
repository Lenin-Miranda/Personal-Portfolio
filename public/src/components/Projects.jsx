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

import spots from "../assets/spots.png";
import toDoList from "../assets/todoList.png";
import wtwr from "../assets/wtwr-bg.png";
import dataCleaner from "../assets/data-bg.png";
import news from "../assets/news-bg.png";
import cyberspace from "../assets/cyberspace.png";
import odontools from "../assets/odontools.png";
import miniCrm from "../assets/mini-crm.png";

function Projects() {
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
        "A weather app with a clean UX/UI and responsive design, with API integration and backend with Node.js and ExpressDB and MongoDB",
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
        "A data cleaner made for data analysis, wich allows you to clean your data and make it ready for analysis, from .xlsx to .csv, with the ability to separate addresses into different columns like street, city, state, country, etc. for very better use on software like BCC",
      image: dataCleaner,
      link: "https://github.com/Lenin-Miranda/csv-cleaner",
      technologies: [{ icon: <FaPython />, name: "Python", color: "#3776AB" }],
      icon: "🧹",
    },
    {
      name: "News App",
      description:
        "A news aggregator app that allows users to search and save articles from various sources, featuring a modern UI and responsive design.",
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
        "A professional website for an IT company, showcasing services, portfolio, and contact information with a clean and modern design.",
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
        "A full-stack e-commerce platform for dental equipment and supplies, featuring secure authentication, product management, inventory control, order processing, user roles, and email notifications.",
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
        "Mini-CRM is a modern task management app built with Next.js 16, TypeScript, and Prisma. It features secure GitHub authentication, a sleek UI with Tailwind CSS and Radix UI, and smooth Framer Motion animations. Easily create, complete, and organize tasks with a responsive design and robust database. Ideal for teams and professionals who want fast, secure, and intuitive task management",
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
          {projects.map((project) => (
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
      </CardContainer>
    </section>
  );
}

export default Projects;
