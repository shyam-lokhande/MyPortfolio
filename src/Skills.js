import React from "react";
import './css/App.css';

import css from './assets/css-3.png';
import C from './assets/c.png';
import html from './assets/html-5.png';
import javascript from './assets/icons8-javascript-48.png';
import python from './assets/python.png';

const Skills = () => {
  return (
    <div className="container mt-4 pt-4">
      <center>
        <span className="text-dark text-center head">My Skills</span>
      </center>
      <div className="top-h d-flex justify-content-evenly">
        <img src={html} className="img" alt="HTML logo" />
        <img src={css} className="img" alt="CSS logo" />
        <img src={javascript} className="img" alt="Javascript logo" />
      </div>
      <div className="top-h d-flex justify-content-evenly">
        <img src={C} className="img" alt="C++ logo" />
        <img src={python} className="img" alt="Python logo" />
      </div>
    </div>
  );
};

export default Skills;
