import { FaGithub, FaLinkedin, FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          <a href="https://github.com/Lenin-Miranda" target="_blank">
            <FaGithub size={30} style={{ color: "#fff" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/lenin-miranda-0b74b4288/"
            target="_blank"
          >
            <FaLinkedin size={30} style={{ color: "#fff" }} />
          </a>
        </p>
        <p className="footer__text">
          <FaCopyright size={20} style={{ color: "#fff" }} />
          Lenin Miranda
        </p>
      </div>
    </footer>
  );
}

export default Footer;
