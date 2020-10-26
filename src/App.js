import React from 'react';
import Fade from "react-reveal/Fade";

import Container from 'react-bootstrap/Container'

//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-navbar/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";

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
    </div>);
};

export default App;
