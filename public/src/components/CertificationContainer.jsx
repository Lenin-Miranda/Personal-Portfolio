import "../styles/Certification.css";
import GridBackgroundDemo from "./GridBackgroundDemo";
import { useEffect, useRef, useState } from "react";

export default function CertificationContainer({ certifications }) {
  const [index, setIndex] = useState(0);
  const slideCount = certifications.length;
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [index]);

  function startAutoPlay() {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slideCount);
    }, 5000);
  }

  function stopAutoPlay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function goPrev() {
    setIndex((i) => (i - 1 + slideCount) % slideCount);
  }

  function goNext() {
    setIndex((i) => (i + 1) % slideCount);
  }

  return (
    <GridBackgroundDemo>
      <section
        id="certifications"
        className="certifications"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
        ref={containerRef}
      >
        <div className="certification__container">
          <div className="certification__container-content">
            <h2 className="certification__container-title ">
              Courses &amp;{" "}
              <span className="text-blue-500 dark:text-blue-500">
                Certifications
              </span>
            </h2>
            <p className="certification__container-paragraph">
              A collection of certifications that showcase my commitment to
              continuous learning and growth in full-stack web development.
            </p>

            <div className="carousel" aria-roledescription="carousel">
              <button
                className="carousel-control prev"
                aria-label="Previous certification"
                onClick={goPrev}
              >
                ‹
              </button>

              <div className="carousel-window">
                <div
                  className="carousel-track"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {certifications.map((certification) => (
                    <div
                      key={certification.id}
                      className="carousel-slide"
                      aria-roledescription="slide"
                      data-aos="fade-left"
                      data-aos-delay={certification.id * 80}
                      data-aos-duration="700"
                    >
                      <div className="certification__item">
                        <div className="certification__item-description">
                          <h3 className="certification__item-title">
                            {certification.title}
                          </h3>
                          <p className="certification__item-paragraph">
                            {certification.description}
                          </p>
                        </div>
                        <div className="certification__item-img">
                          <a
                            href={certification.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={certification.image}
                              alt={certification.title}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="carousel-control next"
                aria-label="Next certification"
                onClick={goNext}
              >
                ›
              </button>
            </div>

            <div className="carousel-dots">
              {certifications.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </GridBackgroundDemo>
  );
}
