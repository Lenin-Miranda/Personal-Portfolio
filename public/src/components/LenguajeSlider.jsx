import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

import "swiper/css";
import "../styles/lenguajeSlider.css";

function LenguajeSlider() {
  const lenguajes = [
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
    { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <SiExpress />, name: "Express", color: "#000000" },
    { icon: <FaHtml5 />, name: "HTML", color: "#E34F26" },
    { icon: <FaCss3 />, name: "CSS", color: "#1572B6" },
    { icon: <FaPython />, name: "Python", color: "#3776AB" },
    { icon: <SiTailwindcss />, name: "TailwindCSS", color: "#38BDF8" },
  ];

  return (
    <div className="lenguaje-slider-container" data-aos="fade-up">
      <h2 className="lenguaje-slider-title">Tecnologies</h2>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        slidesPerView={"auto"}
        freeMode={true}
        allowTouchMove={false}
        className="lenguaje-slider"
      >
        {lenguajes.map((tool, index) => (
          <SwiperSlide key={index} className="lenguaje-slide">
            <div
              className="lenguaje-icon"
              style={{
                color: tool.color,
              }}
            >
              {tool.icon}
            </div>
            <div className="lenguaje-label">{tool.name}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LenguajeSlider;
