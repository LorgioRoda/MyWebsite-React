import React from 'react'
import styled from "styled-components";
import Typewriter from 'typewriter-effect';


const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: #fff;
    background: rgba(16, 20, 30, 39) #10141e;
    text-shadow: 1px 2px 3px #000;;
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;


const TitleMessage = () => (
    <MyTitleMessage>
        <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            <strong>Hi, I'm</strong>
            <br />
            <span>
              <strong>Lorgio Roda</strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["Web Developer", "Software Development"],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            />
          </div>
        </div>
      </div>
    </MyTitleMessage>
    
)


export default TitleMessage