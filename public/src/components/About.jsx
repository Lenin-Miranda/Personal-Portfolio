import LenguajeSlider from "./LenguajeSlider";
import GridBackgroundDemo from "./GridBackgroundDemo";
import {
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaPython,
  FaGithub,
  FaGit,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiJavascript,
  SiMongodb,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiPostman,
  SiJest,
  SiEslint,
} from "react-icons/si";
function About() {
  const lenguajes = [
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
    { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <SiExpress />, name: "Express", color: "#000000" },
    { icon: <FaHtml5 />, name: "HTML", color: "#E34F26" },
    { icon: <FaCss3 />, name: "CSS", color: "#1572B6" },
    { icon: <FaPython />, name: "Python", color: "#3776AB" },
    { icon: <SiTailwindcss />, name: "TailwindCSS", color: "#38BDF8" },
  ];
  const about = `Hi! I'm Lenin Miranda, a passionate Full Stack Software Engineer dedicated to building modern, efficient, and user-friendly web applications. I enjoy transforming ideas into interactive digital experiences using technologies like React, JavaScript, and Node.js.

I'm a self-taught developer who loves learning and adapting to new challenges. My focus is on writing clean, maintainable code and continuously improving my skills.

When I'm not coding, I like exploring new tech trends and collaborating with others to create impactful projects. I'm always looking for opportunities to grow and contribute meaningfully in the tech world.`;

  return (
    <section className="about" id="about" data-aos="fade-up">
      <GridBackgroundDemo>
        <h2 className="about__subtitle ">
          Software Developer{" "}
          <span className="text-blue-500 dark:text-blue-500">
            turning ideas
          </span>{" "}
          into clean digital realities
        </h2>
        <div className="about__container" data-aos="fade-up">
          <div className="about__container-l">
            <h2 className="about__title">
              About <span className="text-blue-500 dark:text-blue-500">Me</span>
            </h2>
            <p className="about__description">
              {about.split(/(\n|\s+)/).map((token, i) => {
                // salto de línea
                if (token === "\n") return <br key={`br-${i}`} />;
                // espacios (mantenerlos sin romper)
                if (/^\s+$/.test(token))
                  return <span key={`sp-${i}`}>&nbsp;</span>;

                // palabra: envolver letras dentro de un contenedor de palabra
                return (
                  <span className="about__word" key={`w-${i}`}>
                    {token.split("").map((ch, j) => (
                      <span
                        key={`ch-${i}-${j}`}
                        className="about__description-char"
                        style={{ animationDelay: `${i * 0.02 + j * 0.02}s` }}
                      >
                        {ch}
                      </span>
                    ))}
                  </span>
                );
              })}
            </p>
          </div>
          <div className="about__container-r">
            <h2 className="text-left text-4xl font-bold text-gray-800 dark:text-gray-200">
              Skills I Work{" "}
              <span className="text-blue-500 dark:text-blue-500">With</span>
            </h2>
            <div className="about__skills">
              <ul className="about__skills-list">
                <li className="about__skills-list-item">
                  <h3 className="about__skills-list-item-title">Front-End</h3>
                  <div className="about__skills-list-item-icon">
                    <FaReact
                      aria-label="React"
                      className="text-blue-500 dark:text-blue-500 text-xl"
                    />
                    <FaCss3
                      aria-label="CSS"
                      className="text-blue-600 dark:text-blue-500 text-xl"
                    />
                    <FaHtml5
                      aria-label="HTML"
                      className="text-orange-600 dark:text-shadow-orange-500 text-xl"
                    />
                    <SiTailwindcss
                      aria-label="TailwindCSS"
                      className="text-blue-400 dark:text-shadow-blue-400 text-xl"
                    />
                    <SiJavascript
                      aria-label="JavaScript"
                      className="text-yellow-500 dark:text-shadow-yellow-500 text-xl"
                    />
                    <SiTypescript
                      aria-label="TypeScript"
                      className="text-blue-500 dark:text-shadow-blue-500 text-xl"
                    />
                  </div>
                </li>
                <li className="about__skills-list-item">React</li>
                <li className="about__skills-list-item">CSS</li>
                <li className="about__skills-list-item">HTML</li>
                <li className="about__skills-list-item">TailwindCss</li>
                <li className="about__skills-list-item">JavaScript</li>
                <li className="about__skills-list-item">TypeScript</li>
              </ul>
              <ul className="about__skills-list">
                <li className="about__skills-list-item">
                  <h3 className="about__skills-list-item-title">Back-End</h3>
                  <div className="about__skills-list-item-icon">
                    <FaNodeJs
                      aria-label="Node.Js"
                      className="text-green-700 dark:text-green-600 text-xl"
                    />
                    <SiExpress
                      aria-label="Express.Js"
                      className="text-gray-600 dark:text-gray-500 text-xl"
                    />
                    <SiMongodb
                      aria-label="MongoDB"
                      className="text-green-600 dark:text-shadow-green-500 text-xl"
                    />
                    <FaPython
                      aria-label="Python"
                      className="text-blue-600 dark:text-shadow-blue-600 text-xl"
                    />
                    <SiJavascript
                      aria-label="JavaScript"
                      className="text-yellow-500 dark:text-shadow-yellow-500 text-xl"
                    />
                    <SiTypescript
                      aria-label="TypeScript"
                      className="text-blue-500 dark:text-shadow-blue-500 text-xl"
                    />
                  </div>
                </li>
                <li className="about__skills-list-item">NodeJS</li>
                <li className="about__skills-list-item">Express</li>
                <li className="about__skills-list-item">MongoDB</li>
                <li className="about__skills-list-item">Python</li>
                <li className="about__skills-list-item">JavaScript</li>
                <li className="about__skills-list-item">TypeScript</li>
              </ul>
              <ul className="about__skills-list">
                <li className="about__skills-list-item">
                  <h3 className="about__skills-list-item-title">Tools</h3>
                  <div className="about__skills-list-item-icon">
                    <VscVscode
                      aria-label="VsCode"
                      className="text-blue-700 dark:text-blue-600 text-xl"
                    />
                    <SiGit
                      aria-label="Git"
                      className="text-orange-600 dark:text-orange-500 text-xl"
                    />
                    <FaGithub
                      aria-label="GitHub"
                      className="text-gray-600 dark:text-shadow-gray-500 text-xl"
                    />
                    <SiPostman
                      aria-label="Postman"
                      className="text-orange-500 dark:text-shadow-orange-500 text-xl"
                    />
                    <SiJest
                      aria-label="Jest"
                      className="text-pink-700 dark:text-shadow-purple-500 text-xl"
                    />
                    <SiEslint
                      aria-label="Eslint"
                      className="text-purple-500 dark:text-shadow-purple-500 text-xl"
                    />
                  </div>
                </li>
                <li className="about__skills-list-item">VsCode</li>
                <li className="about__skills-list-item">Git</li>
                <li className="about__skills-list-item">GitHub</li>
                <li className="about__skills-list-item">Jest</li>
                <li className="about__skills-list-item">Postman</li>
                <li className="about__skills-list-item">Eslint</li>
              </ul>
              <ul className="about__skills-list">
                <li className="about__skills-list-item">
                  <h3 className="about__skills-list-item-title">Other</h3>
                </li>
                <li className="about__skills-list-item">Responsive Design</li>
                <li className="about__skills-list-item">REST APIs</li>
                <li className="about__skills-list-item">Problem Solving</li>
                <li className="about__skills-list-item">Testing/Debugging</li>
              </ul>
            </div>
          </div>
        </div>
      </GridBackgroundDemo>
    </section>
  );
}

export default About;
