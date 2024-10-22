import React from "react";
import Logo from "../assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt=""></img>
        </div>
        <div className="footer-icons">
          <BsTwitter></BsTwitter>
          <SiLinkedin></SiLinkedin>
          <BsYoutube></BsYoutube>
          <FaFacebookF></FaFacebookF>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>Quality</span>
            <span>Help</span>
            <span>Share</span>
            <span>Careers</span>
          </div>
          <div className="footer-section-columns">
            <span>9876543210</span>
            <span>helloThere@gmail.com</span>
            <span>yummy@gmail.com</span>
            <span>workwithus@yahoo.com</span>
          </div>
          <div className="footer-section">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
