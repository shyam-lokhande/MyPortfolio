import React, { useState } from "react";
import "./css/App.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

import crm from "./assets/crm.png";
import dslib from "./assets/dslib.jpeg";
import tic_tac_toe from "./assets/tic_tac_toe.png";
import atm from "./assets/atm.jpeg";
import number_guessing from "./assets/number_guessing.jpeg";
import shape_project from "./assets/ShapeProject.png";
import and_gate from "./assets/AndGateProject.png";
import sci_calci from "./assets/SciCalculator.png";

const WorkCard = ({ id, title, desc, img, link }) => (
  <div className="card card1" style={{ height: "500px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
    {/* Set a maximum height for the card and hide overflow */}
    <img src={img} className="card-img-top" alt="..." style={{ borderRadius: "8px 8px 0 0" }} />
    <div className="card-body d-flex flex-column justify-content-between" style={{ backgroundColor: "#fff", borderRadius: "0 0 8px 8px" }}>
      <div>
        <h4 className="card-title">{title}</h4>
        <p className="card-text" style={{ overflow: "hidden", textOverflow: "ellipsis", maxHeight: "150px" }}>
          {desc}
        </p>
      </div>
      <div className="text-center mt-3">
        <a href={link} target="_blank" rel="noreferrer" className="btn btn-dark">
          View Source
        </a>
      </div>
    </div>
  </div>
);



const Works = () => {
  const works = [
    {
      id: 1,
      title: "DS-Lib : Data Structure Library",
      desc: "Developed a Java library that implements a number of crucial data structures, including trees, stacks, queues, dynamic arrays, and linked lists. - Java (OOPS, Exception Handling), Data Structures and Algorithms",
      img: dslib,
      link: "https://github.com/shyam-lokhande/DS_Library"
    },
    {
      id: 2,
      title: "CRM Project",
      desc: "Technologies used: Django, Mysql, Bootstrap. This is a project which includes the CRUD functions to manage and organize the data.",
      img: crm,
      link: "https://github.com/shyam-lokhande/CRUD"
    },
    {
      id: 3,
      title: "Tic-Tac-Toe",
      desc: "Technologies Used : Java, Min-Max Algorythm. This is a well known game implemented using java. Use of Min-Max algorithm is an addition which makes this project extraordinary.",
      img: tic_tac_toe,
      link: "https://github.com/shyam-lokhande/Tic-Tac-Toe"
    },
    {
      id: 4,
      title: "ATM Machine",
      desc: "Technologies Used : Java. In this project I have developed a ATM machine like command line application using java with all of the functionalities",
      img: atm,
      link: "https://github.com/shyam-lokhande/ATM-System"
    },
    {
      id: 5,
      title: "Trigonometric Calculator",
      desc: "I have created this Trigonometric calculator which implements many of the trigonometric functions. This calculator mainly contains the functions like sin, cos tan, etc.",
      img: sci_calci,
      link: "https://shyam-lokhande.github.io/Scientific-Calulator/"
    },
    {
      id: 6,
      title: "Number Guessing Game",
      desc: "Technologies Used : Java. In this game I have implemeted number guessing game using java and random generator.",
      img: number_guessing,
      link: "https://github.com/shyam-lokhande/Number_Guessing_Game"
    },
    {
      id: 7,
      title: "Shape Editor",
      desc: "Technologies Used : HTML,CSS,Javascript. Using this web based application you can draw various shapes like square, circle and can create a drawing.",
      img: shape_project,
      link: "https://shyam-lokhande.github.io/Shape-Dragging-and-Drawing-Project/"
    },
    {
      id: 8,
      title: "And Gate Working Based Project",
      desc: "This is a project which uses the functionality of and gate. It runs when both ignition and wiper both or on. This is the project that I had created during my second year of engineering when I had completed the VLAB Audit Course.",
      img: and_gate,
      link: "https://shyam-lokhande.github.io/AndGateSimulationProject"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const renderCardPairs = () => {
    const firstCardIndex = activeIndex * 2;
    const secondCardIndex = firstCardIndex + 1;

    return (
      <Row className="justify-content-around">
        {works[firstCardIndex] && <WorkCard {...works[firstCardIndex]} />}
        {works[secondCardIndex] && <WorkCard {...works[secondCardIndex]} />}
      </Row>
    );
  };
  

  return (
    <Container className="mt-4 p-4">
      <center>
        <h2 className="text-center mb-4">Projects</h2>
      </center>
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        indicators={false}
        interval={null}
        touch={true}
        className="w-100"
      >
        {Array.from({ length: Math.ceil(works.length / 2) }, (_, index) => (
          <Carousel.Item key={index}>{renderCardPairs()}</Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Works;
