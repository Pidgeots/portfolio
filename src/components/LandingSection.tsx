import { Avatar, Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { landing } from "../constants/content";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="brand.bg"
  >
    <Avatar name={landing.avatarName} src={landing.avatarSrc} boxSize="225px" />
    <Heading as="h1" size="2xl" color="brand.accent">
      {landing.greeting}
    </Heading>
    <Heading as="h2" size="xl" color="brand.accent">
      {landing.bio1}
    </Heading>
    <Heading as="h2" size="xl" color="brand.accent">
      {landing.bio2}
    </Heading>
  </FullScreenSection>
);

export default LandingSection;
