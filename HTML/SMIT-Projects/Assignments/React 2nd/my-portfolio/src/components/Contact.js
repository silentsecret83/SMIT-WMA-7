// src/components/Contact.js
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Get In Touch</h2>
      <p>
        I'm currently looking for new opportunities. Feel free to reach out if
        you want to collaborate or just say hello!
      </p>
      <a href="mailto:your.email@example.com" className="contact-btn">
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
