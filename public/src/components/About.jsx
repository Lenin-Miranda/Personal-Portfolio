import LenguajeSlider from "./LenguajeSlider";
import GridBackgroundDemo from "./GridBackgroundDemo";
import { Typewriter } from "react-simple-typewriter";
import {
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaPython,
  FaGithub,
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
          into clean digital{" "}
          <Typewriter
            words={[
              "realities",
              "experiences",
              "solutions",
              "products",
              "applications",
            ]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={80}
            delaySpeed={800}
          />
        </h2>
        <div className="about__container" data-aos="fade-up">
          <div className="about__container-l">
            <h2 className="about__title">
              About <span className="text-blue-500 dark:text-blue-500">Me</span>
            </h2>
            <p className="about__description">{about}</p>
          </div>
          <div className="about__container-r">
            <h2 className="text-left text-4xl font-bold text-gray-800 dark:text-gray-200">
              Skills I Work{" "}
              <span className="text-blue-500 dark:text-blue-500">With</span>
            </h2>
            <div className="about__skills">
              <div className="about__skills-list">
                <h3 className="about__skills-list-item-title">Front-End</h3>
                <div className="about__skills-badges">
                  <span className="about__skill-badge">
                    <FaReact className="text-blue-400" /> React
                  </span>
                  <span className="about__skill-badge">
                    <FaCss3 className="text-blue-500" /> CSS
                  </span>
                  <span className="about__skill-badge">
                    <FaHtml5 className="text-orange-500" /> HTML
                  </span>
                  <span className="about__skill-badge">
                    <SiTailwindcss className="text-cyan-400" /> Tailwind
                  </span>
                  <span className="about__skill-badge">
                    <SiJavascript className="text-yellow-400" /> JavaScript
                  </span>
                  <span className="about__skill-badge">
                    <SiTypescript className="text-blue-400" /> TypeScript
                  </span>
                </div>
              </div>
              <div className="about__skills-list">
                <h3 className="about__skills-list-item-title">Back-End</h3>
                <div className="about__skills-badges">
                  <span className="about__skill-badge">
                    <FaNodeJs className="text-green-500" /> Node.js
                  </span>
                  <span className="about__skill-badge">
                    <SiExpress className="text-gray-300" /> Express
                  </span>
                  <span className="about__skill-badge">
                    <SiMongodb className="text-green-400" /> MongoDB
                  </span>
                  <span className="about__skill-badge">
                    <FaPython className="text-blue-400" /> Python
                  </span>
                  <span className="about__skill-badge">
                    <SiJavascript className="text-yellow-400" /> JavaScript
                  </span>
                  <span className="about__skill-badge">
                    <SiTypescript className="text-blue-400" /> TypeScript
                  </span>
                </div>
              </div>
              <div className="about__skills-list">
                <h3 className="about__skills-list-item-title">Tools</h3>
                <div className="about__skills-badges">
                  <span className="about__skill-badge">
                    <VscVscode className="text-blue-500" /> VS Code
                  </span>
                  <span className="about__skill-badge">
                    <SiGit className="text-orange-500" /> Git
                  </span>
                  <span className="about__skill-badge">
                    <FaGithub className="text-gray-300" /> GitHub
                  </span>
                  <span className="about__skill-badge">
                    <SiPostman className="text-orange-400" /> Postman
                  </span>
                  <span className="about__skill-badge">
                    <SiJest className="text-pink-500" /> Jest
                  </span>
                  <span className="about__skill-badge">
                    <SiEslint className="text-purple-400" /> ESLint
                  </span>
                </div>
              </div>
              <div className="about__skills-list">
                <h3 className="about__skills-list-item-title">Other</h3>
                <div className="about__skills-badges">
                  <span className="about__skill-badge">
                    📱 Responsive Design
                  </span>
                  <span className="about__skill-badge">🔗 REST APIs</span>
                  <span className="about__skill-badge">🧩 Problem Solving</span>
                  <span className="about__skill-badge">
                    🧪 Testing/Debugging
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GridBackgroundDemo>
    </section>
  );
}

export default About;
