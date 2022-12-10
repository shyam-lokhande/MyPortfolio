import React from "react";
import "./css/footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Hello Guys! I am Shyam Lokhande. I am an engineering student
              persuing my B.E. degree from PVG's COET concentrated in Computer
              Science field. Currently looking for an internship in Web
              Development. I have coding experience in Java and Python. Apart
              from this I use ReactJs and Django with MySQl for Web Development.
              You can checkout{" "}
              <a href="https://shyam-lokhande.github.io/MyPortfolio/">
                my portfolio here.
              </a>{" "}
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Skills</h6>
            <ul className="footer-links">
              <li>Java</li>
              <li>Python</li>
              <li>Django</li>
              <li>MYSQL</li>
              <li>Typescript</li>
              <li>ReactJs</li>
              <li>HTML/CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Other Projects</h6>
            <ul className="footer-links">
              <li>
                <a href="https://shyam-lokhande.github.io/Kisan/">Kisan</a>
              </li>
              <li>
                <a href="https://shyam-lokhande.github.io/Scientific-Calulator/">
                  Scientific Calcultor
                </a>
              </li>
              <li>
                <a href="https://shyam-lokhande.github.io/Shape-Dragging-and-Drawing-Project/">
                  Shape Draw and Drag Project
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <ul className="social-icons">
              <li>
                <a
                  className="dribbble"
                  href="https://www.linkedin.com/in/shyam-lokhande-6920a2207/"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="https://github.com/shyam-lokhande">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  href="https://www.hackerrank.com/lokhandeshyam201"
                >
                  <i className="fa-brands fa-hackerrank"></i>
                </a>
              </li>
              <li>
                <a
                  className="facebook"
                  href="https://www.instagram.com/shyam_lokhande_/"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
