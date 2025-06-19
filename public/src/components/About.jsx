function About() {
  const about =
    "I'm a front-end developer focused on building clean, responsive, and engaging web experiences. I work mainly with React, JavaScript, and modern web tools to bring designs to life and ensure performance and usability across devices. Whether solo or in a team, I love solving problems and turning ideas into impactful digital products. I'm always learning, always coding.";

  return (
    <section className="about" id="about" data-aos="fade-up">
      <div className="about__container" data-aos="fade-up">
        <h2 className="about__title">About Me</h2>
        <p className="about__description">
          {about.split("").map((char, index) => (
            <span
              key={index}
              className="about__description-char"
              style={{
                animationDelay: `${index * 0.02}s`,
                whiteSpace: char === " " ? "pre" : "normal",
              }}
            >
              {char}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

export default About;
