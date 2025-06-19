import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaPython } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";
import spots from "../assets/spots.png";
import toDoList from "../assets/todoList.png";
import wtwr from "../assets/wtwr-bg.png";

function Projects() {
  const projects = [
    {
      name: "Spots",
      description:
        "A social media platform for sharing photos about your favorite spots",
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
        "A to-do list app with form validation, clean UX/UI and responsive design",
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
      link: "https://lenin-miranda.github.io/se_project_wtwr/",
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
      image: toDoList,
      link: "https://github.com/Lenin-Miranda/csv-cleaner",
      technologies: [{ icon: <FaPython />, name: "Python", color: "#3776AB" }],
      icon: "🧹",
    },
  ];

  return (
    <section className="projects" data-aos="fade-up" path="projects">
      <div className="projects__container">
        <h2 className="projects__title">Projects</h2>
        <div className="projects__cards">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              key={project.name}
            >
              <div className="projects__card" data-aos="fade-right">
                <i className="projects__card-icon">{project.icon}</i>
                <h3
                  className="projects__card-title"
                  style={{ margin: "0 0 10px" }}
                >
                  {project.name}
                </h3>
                <img
                  className="projects__card-image"
                  src={project.image}
                  alt={project.name}
                />
                <p className="projects__card-description">
                  {project.description}
                </p>
                <div className="project__card-tecnology">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="project__card-tecnologies"
                      style={{
                        color: tech.color,
                      }}
                    >
                      <span
                        style={{ fontSize: "1.8rem" }}
                        className="project__card-tecnology-icon"
                      >
                        {tech.icon}
                        {""}
                        <span className="project__card-tecnology-name">
                          {tech.name}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
