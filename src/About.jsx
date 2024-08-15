import React from "react";
import "./About.css";

const About = () => {
  return (
    <center>
    <div className="about-container">
      <div className="about-header">
        <h2>About Us</h2>
        <p>Discover who we are and what we do.</p>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src="https://mrwallpaper.com/images/high/astronaut-art-cool-picture-tpr7tdngfm9t47i0.webp" alt="About Us" />
        </div>
        <div className="about-text">
          <h3>Our Mission</h3>
          <p>
            We are committed to providing the best solutions for our clients. Our team of experts work tirelessly to ensure your success in every project.
          </p>
          <h3>Why Choose Us?</h3>
          <p>
            With years of experience in the industry, we bring a wealth of knowledge and expertise to every project. Our client-centered approach ensures that we meet your unique needs with precision and care.
          </p>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
    </div>
    </center>
  );
};

export default About;
