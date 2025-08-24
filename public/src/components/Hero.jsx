import { BackgroundLines } from "./HeroAnimation";
import { motion } from "motion/react";
import { ContainerTextFlip } from "./ContainerTextFlip";

function Hero() {
  const titleWords = [
    "Full Stack Software Engineer",
    "Software Engineer",
    "JavaScript Developer",
    "Web Developer",
  ];
  const descriptionWords = [
    "passionate",
    "creative",
    "innovative",
    "dedicated",
  ];

  return (
    <section className="hero" data-aos="fade-up" id="home">
      <div className="hero__container" data-aos="fade-up">
        <BackgroundLines />
        <div className="hero__content">
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="hero__title-main">
              Lenin Miranda,
              <br />
            </span>{" "}
            <ContainerTextFlip words={titleWords} />
          </motion.h1>

          <motion.div
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            I'm a self-taught web developer passionate about building clean,
            modern, and functional interfaces. I enjoy turning ideas into
            interactive experiences using technologies like React, JavaScript,
            and Node.js. I'm always learning, improving my skills, and embracing
            new challenges that help me grow as a professional. I'm looking for
            opportunities where I can bring value, collaborate with others, and
            continue evolving in the world of web development.
          </motion.div>
        </div>

        <div className="hidden bg-blue-500 bg-opacity-80 shadow-lg border border-blue-400 min-w-[200px] rounded-lg pt-2 pb-3 text-center text-4xl font-bold text-white"></div>
      </div>
    </section>
  );
}

export default Hero;
