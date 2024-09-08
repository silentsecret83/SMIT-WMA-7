import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectList = [
  {
    name: "AI Podcast Generator",
    description:
      "Transforms written content into captivating, lifelike podcasts effortlessly using ElevenLabs API-powered speech synthesis.",
    techStack: ["React", "Node.js", "Python", "Generative AI", "CSS"],
    image: "/assets/images/first.png", // Direct path
    github: "https://github.com/yourusername/aipodcast",
    demo: "https://aipodcastdemo.com",
  },
  {
    name: "Bank Web App",
    description:
      "A web application allowing users to manage accounts, perform transactions, and view transaction history conveniently.",
    techStack: ["React", "Firebase", "Bootstrap", "CSS"],
    image: "/assets/images/Second.png", // Direct path
    github: "https://github.com/yourusername/bankapp",
    demo: "https://bankappdemo.com",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Title>
        <h2>My Projects</h2>
        <Underline />
      </Title>
      <ProjectsContainer>
        {projectList.map((project, index) => (
          <Project key={index} reverse={index % 2 !== 0}>
            <ImageContainer
              initial={{ opacity: 0, x: project.reverse ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={project.image} alt={project.name} />
            </ImageContainer>
            <ProjectContent
              initial={{ opacity: 0, x: project.reverse ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.techStack.map((tech, idx) => (
                  <TechItem key={idx}>{tech}</TechItem>
                ))}
              </TechStack>
              <Links>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub size={24} />
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt size={24} />
                </a>
              </Links>
            </ProjectContent>
          </Project>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;

const ProjectsSection = styled.section`
  padding: 100px 0;
  background-color: #0d1b2a;
  color: #e5e5e5;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 36px;
    margin: 0;
  }
`;

const Underline = styled.div`
  width: 120px;
  height: 4px;
  background-color: #e63946;
  margin: 10px auto 0;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 90%;
  margin: 0 auto;
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;

  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectContent = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 28px;
  color: #e63946;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  color: #a8dadc;
  line-height: 1.6;
`;

const TechStack = styled.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TechItem = styled.li`
  background-color: #1b263b;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 14px;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #e5e5e5;
    transition: color 0.3s ease;

    &:hover {
      color: #e63946;
    }
  }
`;
