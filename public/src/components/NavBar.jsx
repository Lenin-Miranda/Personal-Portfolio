import { Link } from "react-scroll";

function NavBar({ handleScroll }) {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h2 className="navbar__title">Personal Portfolio</h2>
        <div className="navbar__menu">
          <ul className="navbar__menu-list">
            <li className="navbar__menu-item">
              <Link
                to="home"
                smooth={true}
                duration={200}
                className="navbar__menu-link"
                style={{
                  border:
                    handleScroll > -100 && handleScroll < 600
                      ? "1px solid #fff"
                      : "",
                  transition: "all 0.5s ease-in-out",
                }}
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
                style={{
                  border:
                    handleScroll > 600 && handleScroll < 1400
                      ? "1px solid #fff"
                      : "",
                  transition: "all 0.5s ease-in-out",
                }}
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
                style={{
                  border:
                    handleScroll > 1400 && handleScroll < 3500
                      ? "1px solid #fff"
                      : "",
                  transition: "all 0.5s ease-in-out",
                }}
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
                style={{
                  border: handleScroll > 3700 ? "1px solid #fff" : "",
                  transition: "all 0.5s ease-in-out",
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
