import React from "react";
import "../styles/WhatIBring.css";

export default function WhatIBringToTheTable() {
  const items = [
    {
      id: 1,
      title: "Problem Solving & Systems Thinking",
      description:
        "Break down complex problems into clear, actionable steps and design resilient solutions that balance trade-offs.",
    },
    {
      id: 2,
      title: "Clean, Maintainable Code",
      description:
        "Write readable, well-structured code with tests and documentation so teams can iterate safely and fast.",
    },
    {
      id: 3,
      title: "Team Collaboration",
      description:
        "Communicate clearly, run constructive code reviews and align engineering work with product outcomes.",
    },
    {
      id: 4,
      title: "Production Deployment & Observability",
      description:
        "Ship reliable applications, configure CI/CD and monitor behaviour to learn and improve in production.",
    },
  ];

  function renderIcon(id) {
    switch (id) {
      case 1:
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M20 6L9 17l-5-5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 2:
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M4 7h16M4 12h10M4 17h16"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 3:
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M12 20l9-5-9-5-9 5 9 5z"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 12V4"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" />
          </svg>
        );
    }
  }

  return (
    <section id="whatibring" className="whatibring">
      <div className="whatibring__container">
        <h2 className="whatibring__title">
          What I Bring to the{" "}
          <span className="text-blue-500 dark:text-blue-500">Table</span>
        </h2>
        <p className="whatibring__subtitle">
          Practical skills and habits I use to deliver reliable, maintainable
          results.
        </p>

        <ul className="whatibring__list" role="list">
          {items.map((item, idx) => (
            <li
              key={item.id}
              className="whatibring__item"
              style={{ animationDelay: `${idx * 120}ms` }}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              data-aos-duration="700"
            >
              <div className="whatibring__icon" aria-hidden>
                {renderIcon(item.id)}
              </div>
              <div className="whatibring__content">
                <h3 className="whatibring__item-title">{item.title}</h3>
                <p className="whatibring__item-desc">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
