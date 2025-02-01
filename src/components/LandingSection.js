import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I'm Marat!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#263238"
  >
    <Avatar name="Marat Lakhin" src="./images/avatar.jpg" boxSize="225px" />
    <Heading as="h1" size="2xl" color="#A5D6A7">
      {greeting}
    </Heading>
    <Heading as="h2" size="xl" color="#A5D6A7">
      {bio1}
    </Heading>
    <Heading as="h2" size="xl" color="#A5D6A7">
      {bio2}
    </Heading>
  </FullScreenSection>
);

export default LandingSection;
