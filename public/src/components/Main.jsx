import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
function Main() {
  return (
    <main className="main" data-aos="fade-up">
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default Main;
