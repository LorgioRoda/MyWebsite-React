import React from 'react';
import Fade from "react-reveal/Fade";

import Container from 'react-bootstrap/Container'

//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-navbar/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from  './pages/skills/skill.component';
import ContactForm from "./pages/contact-form/contact-form.component";


import './App.css';

const App = () => {
  return (
  <div>
     <MyNavbar/> 
     <MyCarousal/> 
     <TitleMessage/>
     {/*About Me Section*/}
      <div>
        <Container className="container-box rounded">
        <Fade duration={500}>
        <About/>
        </Fade>
        </Container>
        </div>
      {/* Skills Section */}
        <div>
        <Container className="container-box rounded">
        <Fade duration={500}>
        <skills/>
        </Fade>
        </Container>
        </div>
        {/* skills section */}
        <div>
        <Container className="container-box rounded">
        <Fade duration={500}>
        <Skills/>
        </Fade>
        </Container>
        </div>
        <div>
        <ContactForm/> 
        </div>
    </div>
  );
};

export default App;
