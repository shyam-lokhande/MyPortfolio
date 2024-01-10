import React from "react";
import "./css/App.css";

function Skills(props) {
  const { languages } = props;

  return (
    <div className="container mt-4 p-4 bg-dark text-light">
      <center>
        <h2 className="text-center mb-4">Skills</h2>
      </center>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {languages.map((language) => (
          <div key={language.name} className="col mb-4 text-dark">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{language.name}</h5>
                <div className="progress">
                  <div
                    className={`progress-bar bg-${language.level.toLowerCase()}`}
                    role="progressbar"
                    style={{ width: language.per }}
                    aria-valuenow={language.per}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {language.per}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
