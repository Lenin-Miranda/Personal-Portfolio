import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  function toggleMenu() {
    setIsMenuOpen((s) => !s);
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setIsMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // close menu after clicking a nav link (useful on mobile)
  function handleNavClick() {
    setIsMenuOpen(false);
    if (menuButtonRef.current) menuButtonRef.current.focus();
  }

  return (
    <nav className="navbar" role="navigation" aria-label="Primary navigation">
      <div className="navbar__container">
        <h2 className="navbar__title">Lenin Miranda</h2>

        <div className="navbar__menu">
          <ul
            className={`navbar__menu-list ${
              isMenuOpen ? "navbar__menu-list-open" : ""
            }`}
            role="menubar"
          >
            <li className="navbar__menu-item" role="none">
              <Link
                to="home"
                smooth={true}
                duration={400}
                offset={-70}
                className="navbar__menu-link"
                activeClass="active"
                spy={true}
                role="menuitem"
                onClick={handleNavClick}
              >
                Home
              </Link>
            </li>
            <li className="navbar__menu-item" role="none">
              <Link
                to="about"
                smooth={true}
                duration={400}
                offset={-70}
                className="navbar__menu-link"
                activeClass="active"
                spy={true}
                role="menuitem"
                onClick={handleNavClick}
              >
                About
              </Link>
            </li>
            <li className="navbar__menu-item" role="none">
              <Link
                to="projects"
                smooth={true}
                duration={400}
                offset={-70}
                className="navbar__menu-link"
                activeClass="active"
                spy={true}
                role="menuitem"
                onClick={handleNavClick}
              >
                Projects
              </Link>
            </li>
            <li className="navbar__menu-item" role="none">
              <Link
                to="certifications"
                smooth={true}
                duration={400}
                offset={-70}
                className="navbar__menu-link"
                activeClass="active"
                spy={true}
                role="menuitem"
                onClick={handleNavClick}
              >
                Certifications
              </Link>
            </li>
            <li className="navbar__menu-item" role="none">
              <Link
                to="whatibring"
                smooth={true}
                duration={400}
                offset={-70}
                className="navbar__menu-link"
                activeClass="active"
                spy={true}
                role="menuitem"
                onClick={handleNavClick}
              >
                What I Bring
              </Link>
            </li>

            <li className="navbar__menu-item" role="none">
              <Link
                to="contact"
                smooth={true}
                duration={400}
                offset={-70}
                className="navbar__menu-link"
                activeClass="active"
                spy={true}
                role="menuitem"
                onClick={handleNavClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <a
          className="navbar__menu-button"
          href="https://www.linkedin.com/in/lenin-miranda-0b74b4288/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me
        </a>

        <button
          ref={menuButtonRef}
          className="navbar__menu-icon"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <IoMenu />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
