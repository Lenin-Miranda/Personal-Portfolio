import "../styles/Certification.css";
import GridBackgroundDemo from "./GridBackgroundDemo";
import { useEffect, useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

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

  const cert = certifications[index];

  return (
    <GridBackgroundDemo>
      <section
        id="certifications"
        className="certifications"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
        data-aos="fade-up"
      >
        <div className="cert__header">
          <h2 className="cert__title">
            Courses &amp; <span className="text-blue-500">Certifications</span>
          </h2>
          <p className="cert__subtitle">
            A collection of certifications that showcase my commitment to
            continuous learning and growth in full-stack web development.
          </p>
        </div>

        <div className="cert__carousel">
          <button
            className="cert__arrow"
            onClick={goPrev}
            aria-label="Previous"
          >
            <HiChevronLeft />
          </button>

          <div className="cert__card" key={cert.id}>
            <div className="cert__card-image-wrap">
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert__card-image"
                />
                <div className="cert__card-image-overlay">
                  <FiExternalLink />
                  <span>View Certificate</span>
                </div>
              </a>
            </div>
            <div className="cert__card-body">
              <div className="cert__card-meta">
                <span className="cert__issuer-badge">{cert.issuedBy}</span>
                <span className="cert__date">{cert.issueDate}</span>
              </div>
              <h3 className="cert__card-title">{cert.title}</h3>
              <p className="cert__card-description">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert__card-btn"
              >
                <FiExternalLink /> View Certificate
              </a>
            </div>
          </div>

          <button className="cert__arrow" onClick={goNext} aria-label="Next">
            <HiChevronRight />
          </button>
        </div>

        <div className="cert__dots">
          {certifications.map((_, i) => (
            <button
              key={i}
              className={`cert__dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </GridBackgroundDemo>
  );
}
