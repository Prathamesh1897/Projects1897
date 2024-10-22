import React from "react";
import Navigation from "./Navbar";
import BannerImage from "../assets/home-banner-background.png";
import BannerImage1 from "../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navigation></Navigation>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerImage} alt=""></img>
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Special recipe from Sudha's special kitchen!
          </h1>
          <p className="primary-text">
            Savor Every Bite, One Flavor at a Time. Join Us on a Delicious
            Culinary Journey!
          </p>
          <button className="secondary-button">
            Order Now
            <FiArrowRight></FiArrowRight>
          </button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage1} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
