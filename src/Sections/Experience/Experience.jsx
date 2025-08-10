import React from "react";
import "./Experience.scss";
import { FaChalkboardTeacher } from "react-icons/fa";

const experiences = [
      {
    year: "Aug 2025 – Present",
    role: "Software Engineer",
    // company: "Novac Technology Solutions",:
    company:<span>Novac Technology Solutions - <small>Software Engineer</small></span>,
   icon: <FaChalkboardTeacher />,
    description:
      "Transitioned to an insurance project, taking ownership of front-end development using React.js, ensuring seamless API integration and optimized performance. Collaborated closely with cross-functional teams to deliver high-quality features under tight deadlines. Contributed to backend modules using ASP.NET Web API and SQL Server, ensuring smooth data flow and system stability. Actively participated in requirement analysis, code reviews, and deployment activities to ensure timely and successful releases.",
  },
  {
    year: "May 2023 – May 2024",
    role: "Software Engineer Trainer",
  company:<span>Novac Technology Solutions - <small>Software Engineer Trainer</small></span>,
    icon: <FaChalkboardTeacher />,
    description:
     "Mentored and guided junior developers in full-stack development, sharing best practices and improving their coding skills. Successfully developed and integrated retail project modules using React TypeScript, ASP.NET Web API, and PostgreSQL with Entity Framework to deliver reliable and efficient solutions.",
  },

];

export default function Experience() {
  return (
    <section className="timeline">
      <h2 className="timeline__title">Experience</h2>
      <div className="timeline__container">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline__item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline__content">
              <span className="timeline__year">{exp.year}</span>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
