import GridBackgroundDemo from "./GridBackgroundDemo";
import { Typewriter } from "react-simple-typewriter";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaPython,
  FaGithub,
  FaAws,
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
  SiNestjs,
  SiPostgresql,
  SiSupabase,
  SiGooglecloud,
} from "react-icons/si";
function About() {
  const about = `Hi! I'm Lenin Miranda, a passionate Full Stack Software Engineer dedicated to building modern, efficient, and user-friendly web applications. I enjoy transforming ideas into interactive digital experiences using technologies like React, JavaScript, and Node.js.

I'm a self-taught developer who loves learning and adapting to new challenges. My focus is on writing clean, maintainable code and continuously improving my skills.

I enjoy working across both front-end and back-end environments, building interfaces that feel polished while also designing the logic and structure that keep applications reliable behind the scenes. I'm especially interested in creating products that are fast, scalable, and easy for users to understand.

Lately, I've also been expanding my experience with cloud platforms and modern development workflows, exploring tools that help teams ship better software with more confidence. I care a lot about details, performance, and finding practical solutions that make a real difference in the final product.`;
  const skillGroups = [
    {
      title: "Front-End",
      items: [
        { icon: <FaReact className="text-blue-400" />, label: "React" },
        { icon: <FaCss3 className="text-blue-500" />, label: "CSS" },
        { icon: <FaHtml5 className="text-orange-500" />, label: "HTML" },
        {
          icon: <SiTailwindcss className="text-cyan-400" />,
          label: "Tailwind",
        },
        {
          icon: <SiJavascript className="text-yellow-400" />,
          label: "JavaScript",
        },
        {
          icon: <SiTypescript className="text-blue-400" />,
          label: "TypeScript",
        },
      ],
    },
    {
      title: "Back-End",
      items: [
        { icon: <FaNodeJs className="text-green-500" />, label: "Node.js" },
        { icon: <SiExpress className="text-gray-300" />, label: "Express" },
        { icon: <SiMongodb className="text-green-400" />, label: "MongoDB" },
        { icon: <FaPython className="text-blue-400" />, label: "Python" },
        {
          icon: <SiJavascript className="text-yellow-400" />,
          label: "JavaScript",
        },
        {
          icon: <SiTypescript className="text-blue-400" />,
          label: "TypeScript",
        },
        { icon: <SiNestjs className="text-red-400" />, label: "NestJS" },
        {
          icon: <SiPostgresql className="text-blue-400" />,
          label: "PostgreSQL",
        },
      ],
    },
    {
      title: "Cloud & Platforms",
      className: "about__skills-list--cloud",
      items: [
        {
          icon: <SiSupabase className="text-emerald-400" />,
          label: "Supabase",
        },
        {
          icon: <SiGooglecloud className="text-sky-300" />,
          label: "Google Cloud",
        },
        { icon: <FaAws className="text-orange-400" />, label: "AWS" },
      ],
    },
    {
      title: "Tools",
      items: [
        { icon: <VscVscode className="text-blue-500" />, label: "VS Code" },
        { icon: <SiGit className="text-orange-500" />, label: "Git" },
        { icon: <FaGithub className="text-gray-300" />, label: "GitHub" },
        { icon: <SiPostman className="text-orange-400" />, label: "Postman" },
        { icon: <SiJest className="text-pink-500" />, label: "Jest" },
        { icon: <SiEslint className="text-purple-400" />, label: "ESLint" },
      ],
    },
    {
      title: "Other",
      items: [
        { icon: "📱", label: "Responsive Design" },
        { icon: "🔗", label: "REST APIs" },
        { icon: "🧩", label: "Problem Solving" },
        { icon: "🧪", label: "Testing/Debugging" },
      ],
    },
  ];

  return (
    <section className="about" id="about" data-aos="fade-up">
      <GridBackgroundDemo>
        <h2 className="about__subtitle ">
          Software Developer{" "}
          <span className="text-blue-500">turning ideas</span>
          <br />
          into clean digital{" "}
          <span className="text-blue-500 dark:text-blue-500">
            {" "}
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
          </span>
        </h2>
        <div className="about__container">
          <div className="about__container-l">
            <h2 className="about__title">
              About <span className="text-blue-500 dark:text-blue-500">Me</span>
            </h2>
            <p className="about__description">{about}</p>
          </div>
          <div className="about__container-r">
            <h2 className="about__skills-title">
              Skills I Work <span className="text-blue-500">With</span>
            </h2>
            <div className="about__skills">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className={`about__skills-list${
                    group.className ? ` ${group.className}` : ""
                  }`}
                >
                  <h3 className="about__skills-list-item-title">
                    {group.title}
                  </h3>
                  <div className="about__skills-badges">
                    {group.items.map((item) => (
                      <span key={item.label} className="about__skill-badge">
                        {item.icon} {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GridBackgroundDemo>
    </section>
  );
}

export default About;
