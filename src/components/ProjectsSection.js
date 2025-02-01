import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Responsive Landing Page",
    description: `Developed and deployed a fully responsive landing page using HTML and CSS, ensuring an intuitive and engaging user experience across all devices. 
      The project follows a mobile-first approach, implementing adaptive layouts to provide seamless usability on desktops, tablets, and smartphones. 
      This experience enhanced my skills in semantic HTML, responsive design techniques, and cross-browser compatibility, resulting in an accessible and visually appealing solution.`,
    image: "./images/landingPrev.png",
    link: "https://pidgeots.github.io/sberuniversity-project/",
  },
  {
    title: "To-Do List Application",
    description: `Designed and implemented an interactive to-do list application using JavaScript and Bootstrap, introducing key front-end development concepts such as DOM manipulation, event handling, and data persistence. 
      The project resulted in an intuitive and responsive task management solution with a modern UI, showcasing my ability to build dynamic and user-friendly web applications efficiently.`,
    image: "./images/todoPrev.png",
    link: "https://pidgeots.github.io/to-do-list/",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#263238"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      minHeight="auto"
    >
      <Heading as="h1" id="projects-section" color="#A5D6A7">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={[
          "repeat(1,minmax(0,1fr))",
          "repeat(1,minmax(0,1fr))",
          "repeat(2,minmax(0,1fr))",
        ]}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.image}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
