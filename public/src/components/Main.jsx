import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import CertificationContainer from "./CertificationContainer";

import { certifications } from "../data/certifications.jsx";
function Main() {
  return (
    <main className="main" data-aos="fade-up">
      <About />
      <Projects />
      <CertificationContainer certifications={certifications} />
      <Contact />
      <Footer />
    </main>
  );
}

export default Main;
