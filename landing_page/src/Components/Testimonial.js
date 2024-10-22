import React from "react";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">Some Listening</h1>
        <p className="primary-text">
          I had an amazing experience ordering from this website! The variety of
          dishes is impressive, and everything I tried was not only delicious
          but also beautifully presented. The delivery was prompt, and the
          packaging kept everything fresh. I will definitely be coming back for
          more culinary delights!
        </p>
        <div className="testimonial-section-button"></div>
        <div className="testimonials-stars-container"></div>
      </div>
    </div>
  );
};
export default Testimonial;
