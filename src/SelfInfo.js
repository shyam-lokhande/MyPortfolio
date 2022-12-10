import React from "react";
import "./css/App.css";
import profilePic from "./assets/ShyamLokhande.jpg";

const SelfInfo = () => {
  return (
    <div className="SelfInfo">
      <div className="container1 mt-5 d-flex ">
        <div className="info">
          <h5 className="profile-text">Hi!</h5>
          <h2 className="profile-text">I am Shyam Lokhande</h2>
          <div className="description profile-text-1">
            <h5>A Fullstack Web Developer !</h5>
            <br />
            Currently pursuing my B.E. in Computer Engineering domain
            from Pune Vidyarthi Griha's College of Engineering and Technology,
            Pune.
            <br />
            Experienced Member with a demonstrated history of working in the
            education management industry. Skilled in Python (Programming
            Language), C++, Java, Object-Oriented Programming (OOP), English,
            HTML/CSS, Bootstrap, ReactJs , Django and Mysql. Currently looking for an internship in Web Development. 
            <br />
          </div>
        </div>
        <div className="image-bg">
          <img
            src={profilePic}
            alt="Shyam"
            className="image rounded-circle shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default SelfInfo;
