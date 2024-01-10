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
            I'm passionate about developing software, and I know a lot about Python, C++, and Java. I also have good experience with MySQL, Django Framework , and ReactJS Library in web development. Additionally, I have a solid understanding of computer topics like operating systems, database management systems, and computer networks.
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
