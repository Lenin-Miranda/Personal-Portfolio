import Main from "../components/Main";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // <- ESTA LÍNEA ES CLAVE
import { useEffect, useState } from "react";
import ParticleBackground from "../components/AnimationParticles";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <NavBar handleScroll={scrollY} />
      <Header />
      <Main />
    </div>
  );
}

export default App;
