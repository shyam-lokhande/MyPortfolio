//import logo from './logo.svg';
import './css/App.css';

import Navbar from './Navbar';
import SelfInfo from './SelfInfo';
import Skills from './Skills';
import Works from './Works';
import Footer from "./Footer";
import Mail from "./Mail";

function App() {
  const languages = [
    { name: 'Django', level: 'django',per:"85%"},
    { name: 'Java', level: 'java' ,per:"90%"},
    { name: 'MYSQL', level: 'mysql',per:"70%" },
    { name: 'ReactJs', level: 'reactjs',per:"80%" },
    { name: 'Javascript', level: 'javascript' ,per:"75%"},
    { name: 'HTML/CSS', level: 'htmlcss' ,per:"80%"},
  ];
  
  return (
    <div className="App">
      <Navbar />

      <div id="self"></div>

      <SelfInfo/>

      <div id="skill"></div>

      <Skills languages={languages}/>

      <div id="work"></div>

      <Works/>
    

      <Mail></Mail>
      
    

    <Footer/>

    </div>
  );
}

export default App;
