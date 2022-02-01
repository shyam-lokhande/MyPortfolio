//import logo from './logo.svg';
import './App.css';
import profilePic from './assets/ProfilePhoto.jpeg';
import C from './assets/c.png';
import css from './assets/css-3.png';
import hackerrank from './assets/hackerrank.JPG';
import html from './assets/html-5.png';
import javascript from './assets/icons8-javascript-48.png';
import python from './assets/python.png';
import radiance from './assets/radiance.JPG';

function App() {
  
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" id="#nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="./index.html">Shyam Lokhande</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link mx-5 " href="#self">Myself</a>
              <a className="nav-link mx-5" href="#skill">My Skills</a>
              <a className="nav-link mx-5" href="#work">My Works</a>
              <a className="nav-link mx-5" href="#contact">Contact Me</a>
            </div>
          </div>
        </div>
      </nav>

  <div id="self"></div>
    {/* <!-- intro --> */}
    <div className="container1 mt-5 d-flex ">
      <div className="info">
        <h5 className="profile-text">Hi!</h5>
        <h2 className="profile-text">I am Shyam Lokhande</h2>
        <div className="description profile-text-1">
        <h5>A Frontend Web Developer !</h5><br/>
        Currently pursuing my B.E. degree in Computer Engineering domain from Pune Vidyarthi Griha's College of Engineering and 
        Technology, Pune.<br/>
        I have been programming in CPP since my 12th standard. With time I learned HTML , CSS and JavaScript.
        I made this portfolio website as an application of my knowledge and skills. I also have done many projects. You can checkout
        them as well from MyWorks section below.<br/>
          It would be an honor if you could provide feedback. Thank You!
        </div>
      </div>
      <div className="image-bg">
        <img src={profilePic} alt="Shyam" className="image rounded-circle shadow"/>
      </div>
    </div>

    <div id="skill"></div>

    <div className="container mt-4 pt-4">
      <center><span className="text-dark text-center head" >My Skills</span></center>
      <div className="top-h d-flex justify-content-evenly">
          <img src={html} className="img" alt="HTML logo"/>
          <img src={css} className="img" alt="CSS logo"/>
          <img src={javascript} className="img" alt="Javascript logo"/>
      </div>
      <div className="top-h d-flex justify-content-evenly">
        <img src={C} className="img" alt="C++ logo"/>
        <img src={python} className="img" alt="Python logo"/>
        
      </div>
    </div>

    <div id="work"></div>

    <div className="container mt-4 p-4">
      <center><span className="text-dark text-center head" >My Works</span></center>
      <div className="d-flex flex-column flex-md-row justify-content-md-evenly">

        <div className="card mb-2 card1">
          <img src={radiance} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title" >Radiance Competition Website</h4>
            <p className="card-text">I had participated in Radiance Competition by PICT. During the event I had made this Website as a submission.</p>
          </div>
          <a href="https://shyam-lokhande.github.io/Radiance_Round_2/" target="_blank" className="btn btn-dark">View Source</a>
        </div>
  
        <div className="card mb-2 card1" >
          <img src={hackerrank} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title" >HackerRank Profile</h4>
          <p className="card-text">In order to improve my JavaScript I joined HackerRank portal. There I had done programming in JavaScript and I got 4 stars for it. Check it out below.</p>
        </div>
        <a href="https://www.hackerrank.com/lokhandeshyam201" target="_blank" className="btn btn-dark">View Source</a>
        </div>
      
        <div className="card mb-2 card1" >
          <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title" >Python Programs</h4>
            <p className="card-text">I have programmed in python as well. And I have uploaded all the programs on github. You can checkout the code at my github page.</p>
          </div>
          <a href="https://github.com/shyam-lokhande/PythonProjects" target="_blank" className="btn btn-dark">View Source</a>
        </div>
    
        
          
      </div>
    </div>
    
      
    <div className="container">
      <center><span className="text-dark text-center head" id="contact">Contact Me</span></center>
      <section id="contact" className="mt-4 py-4">
        <div className="row">
          <div className="col-sm">
            <form>
              <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" required className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Your Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" required placeholder="Enter your amazing message" rows="3"></textarea>
              </div>
              <center><button type="submit" className="btn btn-primary">
                Submit
              </button></center>
            </form>
          </div>
        </div>
    </section>
    
    </div>
    </div>
  );
}

export default App;
