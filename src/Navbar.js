import react from 'react';
import './css/App.css';

const Navbar= ()=>{
    return(
        <div >
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
                </div>`
            </nav>
        </div>
    )
}

export default Navbar;
