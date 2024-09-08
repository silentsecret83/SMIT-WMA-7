import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Content
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Get In Touch</Title>
        <Description>
          I'm currently looking for new opportunities and collaborations.
          Whether you have a question or just want to say hello, feel free to
          reach out!
        </Description>
        <EmailButton href="mailto:your.email@example.com">
          Say Hello
        </EmailButton>
      </Content>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.section`
  padding: 100px 0;
  background-color: #1b263b;
  text-align: center;
  color: #e5e5e5;
`;

const Content = styled(motion.div)`
  width: 60%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #e63946;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
  color: #a8dadc;
`;

const EmailButton = styled.a`
  padding: 14px 28px;
  background-color: transparent;
  color: #e63946;
  border: 2px solid #e63946;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #e63946;
    color: #e5e5e5;
  }
`;
