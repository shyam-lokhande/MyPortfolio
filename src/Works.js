import React from "react";
import "./css/App.css";

import radiance from "./assets/radiance.JPG";
import python from "./assets/pythonproject.png";
import AndGateProject from"./assets/AndGateProject.png";
import ShapeProject from"./assets/ShapeProject.png";
import SciCalculator from"./assets/SciCalculator.png";
import crm from "./assets/crm.png"

const Works = () => {
  const works1 = [
    {
      id: 1,
      title: "CRM Project",
      desc: "Technologies used : Django, Mysql. This is a Customer relationship Management project which includes the CRUD functions to manage and organize the data.",
      img: crm,
      link:"https://github.com/shyam-lokhande/CRUD"
    },
    {
      id: 2,
      title: "Shape Draw and Drag Project",
      desc: "In order to improve my JavaScript I joined HackerRank portal. There I had done programming in JavaScript and I got 4 stars for it. Check it out below.",
      img: ShapeProject,
      link:"https://shyam-lokhande.github.io/Shape-Dragging-and-Drawing-Project/"
    },
    {
        id: 3,
        title: "And Gate Working Based Project",
        desc: "This is a project which uses the functionality of and gate. It runs when both ignition and wiper both or on. This is the project that I had created during my second year of engineering when I had completed the VLAB Audit Course.",
        img: AndGateProject,
        link:"https://shyam-lokhande.github.io/AndGateSimulationProject"
    }
  ];

  const worksMap1 = works1.map((item) => {
    return (
      <div className="card mb-2 card1" key={item.id}>
        <img src={item.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{item.title}</h4>
          <p className="card-text">{item.desc}</p>
        </div>
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="btn btn-dark"
        >
          View Source
        </a>
      </div>
    );
  });




  const works2 = [
    {
      id: 4,
      title: "Trigonometric Calculator",
      desc: "I have created this Trigonometric calculator which implements many of the trigonometric functiond. This calculator mainly contains the functions like sin,cos tan, etc.",
      img: SciCalculator,
      link:"https://shyam-lokhande.github.io/Scientific-Calulator/"
    },
    {
        id: 5,
        title: "Kisan Project",
        desc: "I had participated in Radiance Competition by PICT. During the event I had made this Website as a submission.",
        img: radiance,
        link:"https://shyam-lokhande.github.io/Kisan/"
    },
    {
        id: 6,
        title: "Python Programs",
        desc: "I have programmed in python as well. And I have uploaded all the programs on github. You can checkout the code at my github page.",
        img: python,
        link:"https://github.com/shyam-lokhande/PythonProjects"
      },
  ];

  const worksMap2 = works2.map((item) => {
    return (
      <div className="card mb-2 card1" key={item.id}>
        <img src={item.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{item.title}</h4>
          <p className="card-text">{item.desc}</p>
        </div>
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="btn btn-dark"
        >
          View Source
        </a>
      </div>
    );
  });

 

  return (
    <div className="container mt-4 p-4">
      <center>
        <span className="text-dark text-center head">My Works</span>
      </center>
      <div className="d-flex flex-column flex-md-row justify-content-evenly mb-3">
        {worksMap1}
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-evenly mb-3">
        {worksMap2}
      </div>
    </div>
  );
};

export default Works;
