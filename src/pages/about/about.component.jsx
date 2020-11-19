import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Profile from '../../assets/img/profile/perfil.jpg'

import "../about/about.style.css" 


const About = () => {
    return (
        <div id="about">
        <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    {/*Profile Pic*/} 
                    <Col xs={12} md={6}>
                      <Row className="justify-content-center mb-2 mr-2" >
                        <Image className="profile justify-content-end" alt="Profile" src={Profile} thumbnail fluid />
                      </Row>
                    </Col>  
                    { /*About Me description*/} 
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                            {/*Description */}
                            Hi there! I am <strong>&nbsp;Lorgio Roda</strong>
                            <br />A passionate programmer, born and brought up in Bolivia. I am a Web Developer with React.js and Node.js, as my tech stack.
                            <br />
                            In 2019, I began my programming career self taught, using also learning platforms like Platzi and Freecodecamp.
                            <br />
                            When working with clients, my goal is always driven towards providing a great experience with the best level of communication, quality and service to them.
                            <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                            <br /> <br />
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
        </div>  
    )     
}

export default About;