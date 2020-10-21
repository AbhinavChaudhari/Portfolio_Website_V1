import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min';




const Navbar = () => {
    return (
       <>
            <header>
           
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a href="index.html" className="custom-logo-link" rel="home">
                    <img src="./img/logo.png" className="custom-logo" alt="Amike"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id="menu-primary" className="navbar-nav ml-auto">
                        <li><a href="index.html" className="nav-link">Home</a></li>
                        <li><a href="index.html#services" className="nav-link">Services</a></li>
                        <li><a href="index.html#about" className="nav-link">About</a></li>
                        <li><a href="index.html#skills" className="nav-link">Skills</a></li>
                        
                        
                        <li><a href="index.html#contact" className="nav-link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
   
    </>
    
            

       
    )
}

export default Navbar
