import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://facebook.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
      </SocialLinks>
      <CopyRight>
        © {new Date().getFullYear()} Muhammad Usama. All rights reserved.
      </CopyRight>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding: 20px 0;
  background-color: #0d1b2a;
  text-align: center;
  color: #a8dadc;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 10px;
  font-size: 24px;

  a {
    color: #a8dadc;
    transition: color 0.3s ease;

    &:hover {
      color: #e63946;
    }
  }
`;

const CopyRight = styled.p`
  font-size: 14px;
`;
