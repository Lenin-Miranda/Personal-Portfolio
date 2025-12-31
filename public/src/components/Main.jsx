import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatIBringToTheTable from "./WhatIBringToTheTable.jsx";
import CertificationContainer from "./CertificationContainer";
import GridBackgroundDemo from "./GridBackgroundDemo.jsx";
import { certifications } from "../data/certifications.jsx";
function Main() {
  return (
    <main className="main" data-aos="fade-up">
      <About />
      <Projects />
      <CertificationContainer certifications={certifications} />
      <WhatIBringToTheTable />
      <Contact />
      <Footer />
    </main>
  );
}

export default Main;
