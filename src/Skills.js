import React from "react";
import "./css/App.css";

import css from "./assets/css-3.png";
import C from "./assets/c.png";
import html from "./assets/html-5.png";
import javascript from "./assets/icons8-javascript-48.png";
import python from "./assets/python.png";
import java from "./assets/java.jpg";
import mysql from "./assets/mysql.jpg";
import django from "./assets/django.jpg";
import react from "./assets/react.jpg";
import star from "./assets/star.jpg";

const Skills = () => {
  return (
    <div className="container mt-4 pt-4">
      <center>
        <span className="text-dark text-center head">My Skills</span>
      </center>

      <div className="container">
          <div className="row justify-content-around  mb-4 ">
            <div className="col ">
              <img src={html} className="img " alt="HTML logo" />
            
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
            </div>
            <div className="col ">
              <img src={css} className="img " alt="css logo" />
           
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
            </div>
          </div>


          <div className="row justify-content-around  mb-4 ">
            <div className="col ">
              <img src={java} className="img " alt="java logo" />
            
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
            </div>
            <div className="col ">
              <img src={python} className="img " alt="python logo" />
           
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
            </div>
          </div>

          <div className="row justify-content-around  mb-4 ">
            <div className="col ">
              <img src={react} className="img " alt="react logo" />
            
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
            </div>
            <div className="col ">
              <img src={django} className="img " alt="django logo" />
           
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
              <img src={star} className="img1 " alt="HTML logo" />
            </div>
          </div>

      </div>
    </div>
  );
};

export default Skills;
