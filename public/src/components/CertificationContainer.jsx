import "../styles/Certification.css";
import GridBackgroundDemo from "./GridBackgroundDemo";
export default function CertificationContainer({ certifications }) {
  return (
    <GridBackgroundDemo>
      <section className="certifications">
        <div className="certification__container">
          <div className="certification__container-content">
            <h2 className="certification__container-title ">
              Courses &{" "}
              <span className="text-blue-500 dark:text-blue-500">
                Certifications
              </span>
            </h2>
            <p className="certification__container-paragraph">
              A collection of certifications that showcase my commitment to
              continuous learning and growth in full-stack web development.
            </p>
            {certifications.map((certification) => {
              return (
                <div
                  data-aos="fade-right"
                  className="certification__item"
                  key={certification.id}
                >
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
              );
            })}
          </div>
        </div>
      </section>
    </GridBackgroundDemo>
  );
}
