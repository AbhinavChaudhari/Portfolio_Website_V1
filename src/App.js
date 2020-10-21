import React from 'react';
import Navbar from './componants/Navbar';
import Header from './componants/Header';
import Services from './componants/Services';
import About from './componants/About';
import Skill from './componants/Skill';
import Contact from './componants/Contact';
import Footer from "./componants/Footer"
import "./App.css";
import "./Color.css";






const App = () => {
  return (
    <>
    
      <Navbar/>
      <Header/>
      <Services/>
      <About/>
      <Skill/>
      <Contact/>
      <Footer/>
      
     
    </>
  )
}

export default App
