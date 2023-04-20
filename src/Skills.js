import React from "react";
import "./css/App.css";

function Skills(props) {
  const { languages } = props;

  return (
    <div className="container mt-4 p-4 bg-dark text-light">
      <center>
        <span className=" text-center head">My Works</span>
      </center>
      {languages.map((language) => (
        <div key={language.name}>
          <p>{language.name}</p>
          <p className=" float-end ">{language.per}</p>
          <div className={`bar ${language.level.toLowerCase()}`} ></div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
