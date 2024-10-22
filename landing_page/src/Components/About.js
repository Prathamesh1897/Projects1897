import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt=""></img>
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage}></img>
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">Never say no to food!</h1>
        <p className="primary-text">
          Foodie Heaven Awaits You With Every Click. Unleash Your Inner Chef and
          Cook Up Joy Also, Food fuels our bodies like rocket fuel for a
          spaceship, giving us the energy to conquer the day!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            {""}
            Watch Video
            <BsFillPlayCircleFill></BsFillPlayCircleFill>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
