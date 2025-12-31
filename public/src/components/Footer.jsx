import { FaGithub, FaLinkedin, FaCopyright } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="900">
      <div className="footer__container">
        <div className="footer__socials" aria-label="Social links">
          <a
            className="footer__social-link"
            href="https://github.com/Lenin-Miranda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            className="footer__social-link"
            href="https://www.linkedin.com/in/lenin-miranda-0b74b4288/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        <div className="footer__brand">
          <p className="footer__text">
            <FaCopyright size={14} />{" "}
            <span className="footer__name">Lenin Miranda</span>
            <span className="footer__year"> • {year}</span>
          </p>
          <p className="footer__small">
            Full-stack developer — React / Node / Express / MongoDB
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
