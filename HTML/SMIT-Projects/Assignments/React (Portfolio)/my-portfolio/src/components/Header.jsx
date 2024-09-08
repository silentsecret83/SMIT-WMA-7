import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo>Usama</Logo>
        <NavLinks>
          <NavLink to="home" smooth={true} duration={500}>
            Home
          </NavLink>
          <NavLink to="about" smooth={true} duration={500}>
            About
          </NavLink>
          <NavLink to="projects" smooth={true} duration={500}>
            Projects
          </NavLink>
          <NavLink to="contact" smooth={true} duration={500}>
            Contact
          </NavLink>
          <ResumeButton href="/resume.pdf" target="_blank">
            Resume
          </ResumeButton>
        </NavLinks>
        <MobileMenu>
          <FiMenu size={24} />
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  width: 100%;
  padding: 20px 0;
  background-color: transparent;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const NavContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #e5e5e5;
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #a8dadc;
  cursor: pointer;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #e63946;
  }
`;

const ResumeButton = styled.a`
  padding: 10px 20px;
  background-color: #e63946;
  color: #e5e5e5;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a12834;
  }
`;

const MobileMenu = styled.div`
  display: none;
  color: #e5e5e5;

  @media (max-width: 768px) {
    display: block;
  }
`;
