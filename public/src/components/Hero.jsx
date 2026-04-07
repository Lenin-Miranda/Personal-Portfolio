import { BackgroundLines } from "./HeroAnimation";
import { motion } from "motion/react";
import { ContainerTextFlip } from "./ContainerTextFlip";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
          <motion.h1 className="hero__title text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="hero__title-main">
              Lenin Miranda,
              <br />
            </span>
            <span className="hero__title-description">
              <ContainerTextFlip words={titleWords} />
            </span>
          </motion.h1>
        </div>

        <div className="hero__bottom">
          <div className="hero__socials">
            <a
              href="https://github.com/Lenin-Miranda"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lenin-miranda-0b74b4288/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href="#contact" className="hero__social-link" aria-label="Email">
              <MdEmail />
              <span>Contact</span>
            </a>
          </div>

          <motion.a
            href="#about"
            className="hero__scroll-down"
            aria-label="Scroll down"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
