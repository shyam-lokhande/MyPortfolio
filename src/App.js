//import logo from './logo.svg';
import './css/App.css';

import Navbar from './Navbar';
import SelfInfo from './SelfInfo';
import Skills from './Skills';
import Works from './Works';

function App() {
  
  return (
    <div className="App">
      <Navbar />

      <div id="self"></div>

      <SelfInfo/>

      <div id="skill"></div>

      <Skills/>

      <div id="work"></div>

      <Works/>
    
      
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
