import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./LandingSection.css";

import car1 from "../../public/img/carousel-1.jpg";
import car2 from "../../public/img/carousel-2.jpg";
import GetStartedButton from "./GetStartedButton";
function LandingSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change the speed of automatic sliding in milliseconds
    arrows: true, // Show next/prev arrows
    pauseOnHover: false,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <div className="overlay"></div>
          <img src={car1} alt="Slide 1" />
        </div>
        <div className="carousel-slide">
          <div className="overlay"></div>
          <img src={car2} alt="Slide 2" />
        </div>
        <div className="carousel-slide">
          <div className="overlay"></div>
          <img src={car1} alt="Slide 3" />
        </div>
      </Slider>

      <div className="content-overlay">
        <h1 className="lone">Welcome to Your Website</h1>
        <p className="pone mb-5">Explore our amazing features and services</p>
        <GetStartedButton />
      </div>
    </div>
  );
}

export default LandingSection;
