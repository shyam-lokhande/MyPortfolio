import React from "react";
import "./css/App.css";
import { Container } from "react-bootstrap";

const Exp_card = ({ company, position, startDate, endDate, description }) => {
  return (
    <div className="experience-item">
      <h3>{company}</h3>
      <p>{position}</p>
      <p>
        {startDate} - {endDate}
      </p>
      <p>{description}</p>
    </div>
  );
};

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      company: "Newton's Apple",
      position: "Full Stack Web Developer",
      startDate: "June 2023",
      endDate: "August 2023",
      description:
        "Wrote front-end as well as back-end application programming interfaces (APIs) to facilitate web-based project management application for company - Django, MySQL, Postman, HTML, CSS, Javascript",
    },
  ];

  return (
    <div>
    <Container className="mt-4 p-4">
    <center>
        <h2 className="text-center mb-4">Experience</h2>
      </center>
      </Container>
      <div className="app-container">
      {experienceData.map((exp) => (
          <Exp_card key={exp.company} {...exp} />
      ))}
      </div>
    </div>
  );
};
export default Experience;
