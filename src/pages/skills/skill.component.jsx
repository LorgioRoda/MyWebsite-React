import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Image from "react-bootstrap/Image";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../skills/skills.style.css';
import {skills} from './skills-data'


const Skills = () => {
    return (
            <div className="pt-3 pb-3" id="skills">
            <h1 className="text-center font-details-b pb-4">Services</h1>
            <CardDeck>
            <Row className="d-flex justify-content-around">
             {/*Frotend*/}
            <Col md={4}>
                <Card className="focus mt-2 mb-2">
                <Card.Body>    
                <Card.Title className="text-center  card-title">Frontend Developer</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                {
                    skills.frontendDeveloper.map((skill, index) => (
                        <span className="p-3" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                    ))
                }
                </Card.Text>
                </Card.Body>
                </Card>
                </Col>

                {/* Sofware Development */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Software Development</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.SoftwareDevelopment.map((skill, index) => (
                    <span className="p-3" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* E-commerce*/}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">E-commerce 
                Development</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.Ecommerce.map((skill, index) => (
                    <span className="p-3" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
            </Row>
            </CardDeck>
            </div>
    );
};

export default Skills