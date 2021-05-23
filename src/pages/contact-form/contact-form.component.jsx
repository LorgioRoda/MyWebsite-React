import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./contact-form.styles.css";


const ContactForm = () => {
    return (
        <div id="contact">
        <h1 className="pt-3 text-center font-details-b pb-3">Contact Me</h1>
        <Jumbotron className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a href="mailto:lorgiorodaroca@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="btn btn-danger" title="lorgiorodaroca@gmail.com">
                    <i className="fas fa-envelope-square"></i> Email Me
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.linkedin.com/in/anand-kumar-jha-745798a4/" target="_blank" rel="noopener noreferrer">
                  <Button variant="btn btn-info" title="Visit my LinkenIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://twitter.com/roda_lorgio" target="_blank" rel="noopener noreferrer">
                  <Button variant="btn btn-primary" title="Tweets are welcomed!">
                    <i className="fab fa-twitter"></i> Twitter
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://wa.link/r590np" target="_blank" rel="noopener noreferrer">
                  <Button variant="btn btn-success" title="Say hello on Whatsapp">
                    <i className="fab fa-whatsapp "></i> Whatsapp 
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  };

  export default ContactForm;