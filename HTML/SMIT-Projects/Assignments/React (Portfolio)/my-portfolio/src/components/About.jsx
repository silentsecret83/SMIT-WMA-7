import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiPython, SiMongodb } from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React JS" },
  { icon: <FaNodeJs />, name: "Node JS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaDatabase />, name: "SQL" },
];

const About = () => {
  return (
    <AboutSection id="about">
      <Title>
        <h2>About Me</h2>
        <Underline />
      </Title>
      <Content>
        <Text
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          I'm Usama, a passionate Software Engineer based in Faisalabad, PK. I
          have experience in developing scalable web and mobile applications
          using the latest technologies. As a tech trainer at Saylani Welfare
          Mass Training & Job Creation Program, I've mentored over 500 students,
          simplifying complex programming concepts effectively.
          <br />
          <br />
          I'm an undergraduate student at the University of Agriculture,
          Faisalabad, graduating in September 2023. I aspire to pursue a PhD in
          the United States to further my expertise and contribute to
          technological innovations.
        </Text>
        <Skills
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </Skills>
      </Content>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  padding: 100px 0;
  background-color: #1b263b;
  color: #e5e5e5;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 36px;
    position: relative;
  }
`;

const Underline = styled.div`
  width: 100px;
  height: 4px;
  background-color: #e63946;
  margin: 10px auto 0;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
  width: 90%;
  margin: 0 auto;
`;

const Text = styled(motion.div)`
  flex: 1;
  font-size: 18px;
  line-height: 1.6;
  max-width: 600px;
  color: #a8dadc;
`;

const Skills = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const SkillCard = styled.div`
  background-color: #0d1b2a;
  width: 120px;
  height: 120px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const SkillIcon = styled.div`
  font-size: 40px;
  color: #e63946;
  margin-bottom: 10px;
`;

const SkillName = styled.h3`
  font-size: 16px;
  color: #e5e5e5;
`;
