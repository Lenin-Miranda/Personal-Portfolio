import LenguajeSlider from "./LenguajeSlider";
import heroGif from "../assets/hero-bg.gif";
function Hero() {
  return (
    <section className="hero" data-aos="fade-up" id="home">
      <div className="hero__container" data-aos="fade-up">
        <div className="hero__content">
          <img className="hero__image" alt="hero-gif" src={heroGif} />
          <h1 className="hero__title">
            <span className="hero__title-main">
              Hi, I'm Lenin Miranda a Full Stack Software Engineer
            </span>
          </h1>
          <p className="hero__description">
            I'm a self-taught web developer passionate about building clean,
            modern, and functional interfaces. I enjoy turning ideas into
            interactive experiences using technologies like React, JavaScript,
            and Node.js. I'm always learning, improving my skills, and embracing
            new challenges that help me grow as a professional. I'm looking for
            opportunities where I can bring value, collaborate with others, and
            continue evolving in the world of web development.
          </p>
        </div>
        <LenguajeSlider />
      </div>
    </section>
  );
}

export default Hero;
