import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h2 className="primary-heading">Let Us Help You</h2>
      <div className="contact-form-container">
        <input type="text" placeholder="input@gmail.com"></input>
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
