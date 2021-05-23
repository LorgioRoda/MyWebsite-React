import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../../../src/assets/img/carousal/slide1.svg";
import slide2 from "../../../../src/assets/img/carousal/slide2.svg";
import ScrollDown from "../../../components/Scroll-down/scroll-down.component";
import "../my-carousal/my-carosal.style.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={slide2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousal;
