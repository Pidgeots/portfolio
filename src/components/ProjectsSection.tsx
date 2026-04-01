import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import { projects } from "../constants/content";

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="brand.bg"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      minHeight="auto"
    >
      <Heading as="h1" id="projects-section" color="brand.accent">
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
