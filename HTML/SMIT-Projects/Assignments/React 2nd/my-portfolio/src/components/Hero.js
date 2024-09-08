import React from "react";
import "./Hero.css";
import profileImage from "../assets/1680219837377.jpg"; // Import the image

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2>Hello, I'm</h2>
        <h1>Muhammad Usama</h1>
        <p>
          Software Engineer & Trainer. I specialize in crafting high-quality web
          and mobile applications using modern technologies.
        </p>
        <a href="#contact" className="btn">
          Get In Touch
        </a>
      </div>
      <img
        className="hero-image"
        src={profileImage} // Use the imported image
        alt="Profile"
      />
    </section>
  );
};

export default Hero;
