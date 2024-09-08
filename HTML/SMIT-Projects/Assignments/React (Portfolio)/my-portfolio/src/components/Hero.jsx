import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import profilePic from "../assets/images/1680219837377.jpg";
const Hero = () => {
  return (
    <HeroSection id="home">
      <Content>
        <Greeting
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I'm
        </Greeting>
        <Name
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Muhammad Usama
        </Name>
        <Subtitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Software Engineer & Trainer
        </Subtitle>
        <Description
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1 }}
        >
          I specialize in crafting high-quality web and mobile applications
          using modern technologies. Currently exploring the realms of
          Generative AI and aiming to pursue PhD studies in the USA.
        </Description>
        <ContactButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
        >
          Get In Touch
        </ContactButton>
      </Content>
      <ProfileImage
        src={profilePic}
        alt="Profile Picture"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      />
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  min-height: 100vh;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0d1b2a;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 100px 20px;
    text-align: center;
  }
`;

const Content = styled.div`
  flex: 1;
  color: #e5e5e5;
  padding-left: 50px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Greeting = styled(motion.h2)`
  font-size: 24px;
  color: #a8dadc;
  margin-bottom: 10px;
`;

const Name = styled(motion.h1)`
  font-size: 48px;
  margin-bottom: 20px;
  color: #e63946;
`;

const Subtitle = styled(motion.h3)`
  font-size: 32px;
  margin-bottom: 20px;
  color: #e5e5e5;
`;

const Description = styled(motion.p)`
  font-size: 18px;
  line-height: 1.5;
  max-width: 500px;
  margin-bottom: 30px;
  color: #a8dadc;
`;

const ContactButton = styled(motion.a)`
  padding: 12px 24px;
  background-color: #e63946;
  color: #e5e5e5;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
`;

const ProfileImage = styled(motion.img)`
  flex: 1;
  max-width: 400px;
  border-radius: 50%;
  margin-right: 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    margin: 40px 0 0 0;
    max-width: 300px;
  }
`;
