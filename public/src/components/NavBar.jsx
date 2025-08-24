import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h2 className="navbar__title">Lenin Miranda</h2>
        <div className="navbar__menu">
          <ul className="navbar__menu-list">
            <li className="navbar__menu-item">
              <Link
                to="home"
                smooth={true}
                duration={200}
                className="navbar__menu-link"
              >
                Home
              </Link>
            </li>
            <li className="navbar__menu-item">
              <Link
                to="about"
                smooth={true}
                duration={200}
                className="navbar__menu-link"
              >
                About
              </Link>
            </li>
            <li className="navbar__menu-item">
              <Link
                to="projects"
                smooth={true}
                duration={200}
                className="navbar__menu-link"
              >
                Projects
              </Link>
            </li>
            <li className="navbar__menu-item">
              <Link
                to="contact"
                smooth={true}
                duration={200}
                className="navbar__menu-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button className="navbar__menu-button">
          <NavLink
            target={"_blank"}
            to={"https://www.linkedin.com/in/lenin-miranda-0b74b4288/"}
          >
            Connect with me
          </NavLink>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
